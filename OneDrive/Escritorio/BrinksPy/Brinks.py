import tkinter as tk
from tkinter import filedialog
import pandas as pd
import win32print


# Variables globales para los dos archivos Excel
data_agrupada = None
data_mostrar = None
data_camaras = None
cantidad_var = None
resultados_exportar = None  # Variable para almacenar los resultados a exportar

def procesar_excel_agrupar():
    global data_agrupada, cantidad_var
    try:
        # Abrir un cuadro de diálogo para seleccionar el primer archivo Excel
        archivo_excel = filedialog.askopenfilename(title="Seleccionar archivo Excel")

        cantidad_var = tk.StringVar()

        # Cargar datos desde el archivo Excel
        data_agrupada = pd.read_excel(archivo_excel)
        data_agrupada[data_agrupada.columns[1]] = data_agrupada[data_agrupada.columns[1]].astype(str).str[2:]
        data_agrupada = data_agrupada.groupby(data_agrupada.columns[1])[data_agrupada.columns[3]].sum().reset_index()

        # Guardar automáticamente una copia del Excel agrupado
        guardar_archivo_agrupado(data_agrupada, "excel_agrupado.xlsx")

        ventana_emergente = tk.Toplevel(root)
        ventana_emergente.title("Datos Procesados (Agrupados y Sumados)")

        texto = tk.Text(ventana_emergente)
        texto.insert(tk.END, data_agrupada.to_string(index=False, header=False))
        texto.pack()

        filtro_label = tk.Label(ventana_emergente, text="Filtrar por cantidad:")
        filtro_label.pack()

        filtro_entry = tk.Entry(ventana_emergente, textvariable=cantidad_var)
        filtro_entry.pack()

        aplicar_filtro_button = tk.Button(ventana_emergente, text="Aplicar Filtro", command=aplicar_filtro_cantidad)
        aplicar_filtro_button.pack()

        boton_imprimir = tk.Button(ventana_emergente, text="Imprimir", command=lambda: imprimir_datos(data_agrupada))
        boton_imprimir.pack()

        boton_exportar_excel = tk.Button(ventana_emergente, text="Exportar a Excel", command=exportar_a_excel)
        boton_exportar_excel.pack()

    except FileNotFoundError:
        print("No se seleccionó ningún archivo Excel para agrupar y sumar.")

def guardar_archivo_agrupado(data_frame, nombre_archivo):
    try:
        # Guardar el DataFrame en un archivo Excel
        data_frame.to_excel(nombre_archivo, index=False)
        print(f"Se ha guardado una copia del Excel agrupado como '{nombre_archivo}'.")
    except Exception as e:
        print(f"Error al guardar el archivo Excel: {e}")



def aplicar_filtro_cantidad():
    try:
        cantidad_filtrar = float(cantidad_var.get())
        nombre_columna = data_agrupada.columns[1]
        rutas_filtradas = data_agrupada[data_agrupada[nombre_columna] <= cantidad_filtrar]

        ventana_filtrada = tk.Toplevel(root)
        ventana_filtrada.title("Rutas Filtradas (Igual o Menos Cantidad)")

        texto_filtrado = tk.Text(ventana_filtrada)
        texto_filtrado.insert(tk.END, rutas_filtradas.to_string(index=False, header=False))
        texto_filtrado.pack()

    except ValueError:
        print("La cantidad ingresada no es un número válido.")

def procesar_excel_mostrar():
    global data_mostrar, data_agrupada
    try:
        # Abrir un cuadro de diálogo para seleccionar el segundo archivo Excel
        archivo_excel = filedialog.askopenfilename(title="Seleccionar segundo archivo Excel")

        data_mostrar = pd.read_excel(archivo_excel, skiprows=4)
        data_mostrar = data_mostrar.iloc[:, [0, 1, 3, 4]]

        # Normalizar las rutas para asegurar una comparación precisa
        data_agrupada.iloc[:, 0] = data_agrupada.iloc[:, 0].str.strip().str.lower()
        data_mostrar.iloc[:, 0] = data_mostrar.iloc[:, 0].str.strip().str.lower()

        # Inicializar la columna "cantidad" con 0
        data_mostrar["cantidad"] = 0

        # Comparar cada ruta del segundo archivo con las rutas del archivo ya procesado
        for idx, row in data_mostrar.iterrows():
            ruta = row.iloc[0]  # Seleccionar la primera columna
            cantidad = data_agrupada.loc[data_agrupada.iloc[:, 0] == ruta, "CANTIDAD DE BULTOS POR CLASE"].values
            if len(cantidad) > 0:
                data_mostrar.at[idx, "cantidad"] = cantidad[0]

        ventana_emergente = tk.Toplevel(root)
        ventana_emergente.title("Columnas 1, 2, 4, 5 y Cantidad")

        texto = tk.Text(ventana_emergente)
        texto.insert(tk.END, data_mostrar.to_string(index=False, header=True))
        texto.pack()

    except FileNotFoundError:
        print("No se seleccionó ningún segundo archivo Excel para mostrar.")



# Función para cargar y procesar el archivo de cámaras
def procesar_excel_camaras():
    global data_camaras, resultados_exportar
    try:
        archivo_camaras = filedialog.askopenfilename(title="Seleccionar archivo de cámaras")

        data_camaras = pd.read_excel(archivo_camaras)

        # Filtrar las filas que contienen "lo solicitado en filtro" en la séptima columna
        componentes_filtrados = data_camaras[data_camaras.iloc[:, 6].str.contains('box|adid|bbox|carombur|ims|norquil|norave|norsar|mcbf|noradr|norsanj|norsm|noraum|noroliv|carotab|norbanfi|norcarsf|caromla|havflor2|carjcpaz|ib106|caromor|s1gb|carosj|mcp11357|s1gib|norlt|nortortu|normore', case=False, na=False, regex=True)]
        
        # Aquí, aplicamos la modificación para eliminar los dos primeros caracteres de la columna 1
        componentes_filtrados.iloc[:, 0] = componentes_filtrados.iloc[:, 0].str[2:]

        rutas_contenido = pd.DataFrame({'Ruta': componentes_filtrados.iloc[:, 0], 'Contenido': componentes_filtrados.iloc[:, 6].str.slice(0, 8)})

        # Eliminar filas con valores NaN antes de mostrar
        rutas_contenido = rutas_contenido.dropna()

        # Eliminar filas duplicadas basadas en la columna "Contenido"
        rutas_contenido = rutas_contenido.drop_duplicates(subset="Contenido")

        resultados_exportar = rutas_contenido  # Almacenar los resultados para exportar

        ventana_camaras = tk.Toplevel(root)
        ventana_camaras.title("Componentes con 'box' o 'bbox'")

        texto = tk.Text(ventana_camaras)
        texto.insert(tk.END, rutas_contenido.to_string(index=False, header=True))
        texto.pack()

    except FileNotFoundError:
        print("No se seleccionó ningún archivo de cámaras.")

# Función para exportar los datos a un archivo Excel
def exportar_a_excel():
    if resultados_exportar is not None:
        archivo_guardar = filedialog.asksaveasfilename(defaultextension=".xlsx", filetypes=[("Archivos de Excel", "*.xlsx")])
        if archivo_guardar:
            resultados_exportar.to_excel(archivo_guardar, index=False)



# Crear la ventana principal
root = tk.Tk()
root.title("Aplicación para Procesar Excel")

# Botón para cargar y procesar el primer archivo Excel (agrupación y suma)
boton_procesar_agrupar = tk.Button(root, text="Cantidades", command=procesar_excel_agrupar)
boton_procesar_agrupar.pack()

# Botón para cargar y mostrar las columnas 1, 2, 4, 5 y "cantidad" del segundo archivo Excel
boton_procesar_mostrar = tk.Button(root, text="Rutas , UB y JE", command=procesar_excel_mostrar)
boton_procesar_mostrar.pack()

# Botón para cargar y procesar el archivo de cámaras
boton_procesar_camaras = tk.Button(root, text="Cámaras", command=procesar_excel_camaras)
boton_procesar_camaras.pack()

# Botón para exportar los resultados a un archivo Excel
boton_exportar_excel = tk.Button(root, text="Exportar a Excel", command=exportar_a_excel)
boton_exportar_excel.pack()

# Botón para salir de la aplicación
boton_salir = tk.Button(root, text="Salir", command=root.destroy)
boton_salir.pack()

# Iniciar la aplicación
root.mainloop()






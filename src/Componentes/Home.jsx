import React from 'react'
import '../Css/Home.css';
import datos from '../Data/datos'




const Home = () => {
    return (
        <div className="container-fluid m-5 fondo">
            <hr></hr>
                <h1 className='m-5 text-center'>
                    Home
                </h1>
            <hr></hr>
            <div>

                { datos.map((datos)=>{
                    return(
                        <article key={datos.id} className='margen'>
                            <h3>
                                { datos.name }
                            </h3>
                            <img src={datos.image} alt={ datos.name } />
                        </article>
                        )
                    })      
                } 

            </div>


        </div>
    )
}

export default Home

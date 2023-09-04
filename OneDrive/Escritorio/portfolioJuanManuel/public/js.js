let previousTitle = document.title;
let previousFavicon = document.querySelector("link[rel='icon']").href;

window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = '¡No te vayas! ¡Vuelve a mi página!';
    document.querySelector("link[rel='icon']").href = "/img/enojado.ico";
});

window.addEventListener('focus', () => {
    document.title = previousTitle;
    document.querySelector("link[rel='icon']").href = previousFavicon;
});

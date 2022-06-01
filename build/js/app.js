function iniciarApp() {
    crearGaleria()
}

function crearGaleria() {
    const e = document.querySelector(".galeria-imagenes");
    for (let t = 1; t <= 12; t++) {
        const n = document.createElement("picture");
        n.innerHTML = `\n        <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n        <source srcset="build/img/thumb/${t}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen galería">`, n.onclick = function () {
            mostrarImagen(t)
        }, e.appendChild(n)
    }
}

function mostrarImagen(e) {
    const t = document.createElement("picture");
    t.innerHTML = `\n<source srcset="build/img/grande/${e}.avif" type="image/avif">
                    \n<source srcset="build/img/grande/${e}.webp" type="image/webp">\n<img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galería">`;
    //!Crea el Overlay con la imagen
    const n = document.createElement("DIV");
    n.appendChild(t), n.classList.add("overlay");
    //!Botón para cerrar el Modal
    const i = document.createElement("P");
    i.textContent = "X", i.classList.add("btn-cerrar"), i.onclick = function () {
        document.querySelector("body").classList.remove("fijar-body"), n.remove()
    }, n.appendChild(i);
    //!Añadirlo al HTML
    const a = document.querySelector("body");
    a.appendChild(n), a.classList.add("fijar-body")
}
document.addEventListener("DOMContentLoaded", (function () {
    iniciarApp()
}));
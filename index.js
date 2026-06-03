/* animacion*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animar, .animar_izq, .animar_der').forEach(el => observer.observe(el));


/* Boton abrir*/
function abrirMenu() {
    document.getElementById("menu").style.display = "block";
}
/* Boton cerrar */
function cerrarMenu() {
    document.getElementById("menu").style.display = "none";
}

/* editar post*/
fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
        const contenedor = document.getElementById('blog_container');
        posts.forEach((post, index) => {
            const card = document.createElement('div');
            card.classList.add('blog_card', 'animar');
            card.style.transitionDelay = `${index * 0.15}s`;
            card.innerHTML = `
                <img src="${post.imagen}" alt="${post.titulo}">
                <span class="blog_categoria">${post.categoria}</span>
                <span class="blog_fecha">${post.fecha}</span>
                <h3>${post.titulo}</h3>
                <p>${post.resumen}</p>
                <a href="${post.link}">Leer más →</a>
            `;
            contenedor.appendChild(card);
            observer.observe(card);
        });
    })
    .catch(err => console.error('Error cargando posts:', err));

/* navbar cambia de color */
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".header_main");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* reinicio al principio */
history.scrollRestoration = 'manual';
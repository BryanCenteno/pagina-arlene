const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
        const post = posts.find(p => p.id === id);

        if (!post) {
            document.getElementById('post_titulo').textContent = 'Artículo no encontrado';
            return;
        }

        document.title = post.titulo + ' - Un dulce espacio';
        document.getElementById('post_imagen').src = post.imagen;
        document.getElementById('post_imagen').alt = post.titulo;
        document.getElementById('post_titulo').textContent = post.titulo;
        document.getElementById('post_fecha').textContent = post.fecha;
        document.getElementById('post_categoria').textContent = post.categoria;
        document.getElementById('post_body').innerHTML = post.contenido;
    })
    .catch(err => console.error('Error:', err));
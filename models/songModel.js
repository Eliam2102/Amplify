const axios = require('axios');

class cancion {
    constructor(id, titulo, artista, archivo, imagen) {
        this.id = id;
        this.titulo = titulo;
        this.artista = artista;
        this.archivo = archivo;
        this.imagen = imagen;
    }
}

// Función para agregar una nueva canción
async function agregarCancion(cancion) {
    try {
        console.log('Subiendo canción :', { cancion });
        await axios.post(`${process.env.BASE_URL}/songs/add-song`, {cancion});
        console.log('La canción se cargo con éxito', cancion);

    } catch (error) {
        console.error('Error al cargar la canción:', error.message);
    }
}

// Función para eliminar una canción
async function deleteSong(id) {
    try {
        await axios.delete(`${process.env.BASE_URL}/songs/${id}`);
        return true; // Retorna true si la eliminación fue exitosa
    } catch (error) {
        console.error('Error al eliminar la canción:', error);
        throw error;
    }
}

// Función para agregar una canción a favoritos
async function addSongToFavorites(id) {
    try {
        const response = await axios.post(`${process.env.BASE_URL}/songs/${id}/favorite`);
        return response.data.id; // Retorna el ID de la nueva entrada en favoritos
    } catch (error) {
        console.error('Error al agregar la canción a favoritos:', error);
        throw error;
    }
}

// Función para obtener la lista de canciones
async function getAll() {
    try {
        console.log('Obteniendo la lista de canciones');
        const response = await axios.get(`${process.env.BASE_URL}/songs/getAllSong`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener la lista de canciones:', error.message);
        return []; // Devuelve un array vacío en caso de error
    }
}


module.exports = {
    agregarCancion,
    getAll,
    addSongToFavorites,
    deleteSong
};

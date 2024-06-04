const songModel = require('../models/songModel');

// Utilidad para enviar una respuesta JSON exitosa
function sendSuccessResponse(res, data) {
    res.status(200).json(data);
}

// Utilidad para enviar una respuesta de error
function sendErrorResponse(res, statusCode, message) {
    res.status(statusCode).json({ error: message });
}

// Controlador para agregar una canción
async function agregarCancion(titulo, artista, archivo, imagen) {
    try {
        console.log('Datos de la nueva publicación:',titulo, artista, archivo, imagen);

        const cancion = {
            titulo: titulo,
            artista: artista,
            archivo: archivo,
            imagen: imagen
        }
        console.log('Cancion almacenada en memoria = ', cancion);

        await songModel.agregarCancion(cancion);
        console.log('Cancion agregada exitosamente');
        res.status(201).send('Cancion guardada');
        res.redirect('/musica');
    } catch (error) {
        console.error('Error al agregar canción:', error);
        res.status(500).send('Hubo un error al agregar la cancion');
    }
}

//Controlador para obtener la lista de canciones
async function getLista(req, res) {
    try {
        const canciones = await songModel.obtenerLista();
        console.log('Canciones obtenidas:', canciones);
        res.render('canciones', { title: 'DATE A LIVE FANS', canciones: canciones || [] });
    } catch (error) {
        console.error('Error al obtener canciones:', error);
        res.status(500).send('Error al obtener canciones');
    }
}

// Controlador para eliminar una canción
async function deleteSong(req, res) {
    try {
        const { id } = req.params;
        await songModel.deleteSong(id);
        sendSuccessResponse(res, { message: 'Canción eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar canción:', error);
        sendErrorResponse(res, 500, 'Error interno del servidor');
    }
}

module.exports = {
    agregarCancion,
    getLista
};

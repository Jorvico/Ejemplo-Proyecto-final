const Album = require('../models/album.js')

exports.getAlbumsNyNombre = async(req, res) => {
    try {
        const albums = await Album.find()
        const albumsByNombre = {}

        albums.forEach((album) =>{
            if(!albumsByNombre[album.nombre]){
                albumsByNombre[album.nombre] = []
            }

            albumsByNombre[album.nombre].push(album)
            
        })
        
        res.json(albumsByNombre)
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los datos'})
    }
}
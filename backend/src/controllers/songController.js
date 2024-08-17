const Song = require('../models/Song')






const createSong = async (req, res) => {
    try {
        const newSong = new Song(req.body);
        const savedSong = await newSong.save();
        res.status(201).json(savedSong);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getSongs = async (req, res) => {
    try {
      const filter = req.query.genre ? { genre: req.query.genre } : {};
      const songs = await Song.find(filter);
      res.status(200).json(songs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

const getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json(song);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json(song);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};




const deleteSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json({ message: 'Song deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// const getStatistics = async (req, res) => {
//     try {
//         const totalSongs = await Song.countDocuments();
//         const genres = await Song.aggregate([
//             { $group: { _id: '$genre', count: { $sum: 1 } } }
//         ]);
//         const artists = await Song.aggregate([
//             { $group: { _id: '$artist', songsCount: { $sum: 1 }, albums: { $addToSet: '$album' } } },
//             { $project: { _id: 1, songsCount: 1, albumsCount: { $size: '$albums' } } }
//         ]);
//         const albums = await Song.aggregate([
//             { $group: { _id: '$album', count: { $sum: 1 } } }
//         ]);
//         res.status(200).json({ totalSongs, genres, artists, albums });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


const getStatistics = async (req, res) => {
    try {
        // Total number of songs
        const totalSongs = await Song.countDocuments();

        // Total number of genres
        const genres = await Song.aggregate([
            { $group: { _id: '$genre', count: { $sum: 1 } } }
        ]);
        const totalGenres = genres.length;

        // Total number of artists and the number of songs and albums per artist
        const artists = await Song.aggregate([
            { $group: { _id: '$artist', songsCount: { $sum: 1 }, albums: { $addToSet: '$album' } } },
            { $project: { _id: 1, songsCount: 1, albumsCount: { $size: '$albums' } } }
        ]);
        const totalArtists = artists.length;

        // Total number of albums and the number of songs per album
        const albums = await Song.aggregate([
            { $group: { _id: '$album', count: { $sum: 1 } } }
        ]);
        const totalAlbums = albums.length;

        // Transform the data into the structure expected by the frontend
        const songsByGenre = genres.reduce((acc, genre) => {
            acc[genre._id] = genre.count;
            return acc;
        }, {});

        const songsByArtist = artists.reduce((acc, artist) => {
            acc[artist._id] = { songs: artist.songsCount, albums: artist.albumsCount };
            return acc;
        }, {});

        const songsByAlbum = albums.reduce((acc, album) => {
            acc[album._id] = album.count;
            return acc;
        }, {});

        // Return the statistics in the expected format
        res.status(200).json({ 
            totalSongs, 
            totalArtists, 
            totalAlbums, 
            totalGenres, 
            songsByGenre, 
            songsByArtist, 
            songsByAlbum 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};










module.exports = {
    createSong,
    getSongs,
    deleteSong,
    updateSong,
    getSongById,
    getStatistics  

};
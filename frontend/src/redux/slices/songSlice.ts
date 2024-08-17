import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

// Type for a new song (without an id)
interface NewSong {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface FilterPayload {
  genre?: string;
}

interface SongState {
  songs: Song[];
  loading: boolean;
}

const initialState: SongState = {
  songs: [],
  loading: false,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Updated fetchSongsRequest to accept an optional filter payload
    fetchSongsRequest(state, action: PayloadAction<FilterPayload>) {
      state.loading = true;
      // The payload can include genre or other filter criteria
      // This would be sent to your API to fetch filtered data
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure(state) {
      state.loading = false;
    },
    // Add song request expects `NewSong` (without id)
    addSongRequest(state, action: PayloadAction<NewSong>) {
      state.loading = true;
    },
    // Add song success expects `Song` (with id)
    addSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    updateSongRequest(state, action: PayloadAction<Song>) {
      state.loading = true;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    deleteSongRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter(song => song.id !== action.payload);
      state.loading = false;
    },
  },
});

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  updateSongRequest,
  updateSongSuccess,
  deleteSongRequest,
  deleteSongSuccess,
} = songSlice.actions;

export default songSlice.reducer;

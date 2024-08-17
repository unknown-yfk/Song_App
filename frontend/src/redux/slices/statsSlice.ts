import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Stats {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsByGenre: { [key: string]: number };
  songsByArtist: { [key: string]: { songs: number; albums: number } };
  songsByAlbum: { [key: string]: number };
}

interface StatsState {
  stats: Stats | null;
  loading: boolean;
}

const initialState: StatsState = {
  stats: null,
  loading: false,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    fetchStatsRequest(state) {
      state.loading = true;
    },
    fetchStatsSuccess(state, action: PayloadAction<Stats>) {
      state.stats = action.payload;
      state.loading = false;
    },
    fetchStatsFailure(state) {
      state.loading = false;
    },
  },
});

export const {
  fetchStatsRequest,
  fetchStatsSuccess,
  fetchStatsFailure,
} = statsSlice.actions;

export default statsSlice.reducer;

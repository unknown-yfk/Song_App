import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  updateSongRequest,
  updateSongSuccess,
  deleteSongRequest,
  deleteSongSuccess,
} from '../redux/slices/songSlice';

import {
  fetchStatsRequest,
  fetchStatsSuccess,
  fetchStatsFailure,
} from '../redux/slices/statsSlice';


// Helper function to map _id to id
const mapSongs = (songs: any[]) => songs.map(song => ({
  ...song,
  id: song._id,
}));
// Saga functions
function* fetchSongs(action: ReturnType<typeof fetchSongsRequest>) {
  try {
    const params = action.payload.genre ? { genre: action.payload.genre } : {};

    const response: AxiosResponse = yield call(axios.get, 'http://localhost:5000/api/songs', { params });
    console.log('Fetched songs:', response.data); // Log response data
    const mappedSongs = mapSongs(response.data);

    yield put(fetchSongsSuccess(mappedSongs));
  } catch (error) {
    yield put(fetchSongsFailure());
  }
}

function* addSong(action: ReturnType<typeof addSongRequest>) {
  try {
    const response: AxiosResponse = yield call(axios.post, 'http://localhost:5000/api/songs', action.payload);
    const newSong = { ...response.data, id: response.data._id }; // Map _id to id
    yield put(addSongSuccess(newSong));
  } catch (error) {
    yield put(fetchSongsFailure());
  }
}

// function* updateSong(action: ReturnType<typeof updateSongRequest>) {
//   try {
//     const response: AxiosResponse = yield call(axios.put, `http://localhost:5000/api/songs/${action.payload.id}`, action.payload);
//     yield put(updateSongSuccess(response.data));
//   } catch (error) {
//     yield put(fetchSongsFailure());
//   }
// }

function* updateSong(action: ReturnType<typeof updateSongRequest>) {
  try {
    const response: AxiosResponse = yield call(axios.put, `http://localhost:5000/api/songs/${action.payload.id}`, action.payload);
    
    if (response.status === 200) { // Ensure a successful response
      yield put(updateSongSuccess(response.data));
    } else {
      console.error('Failed to update song: Non-200 response', response);
      yield put(fetchSongsFailure()); // Consider a more specific failure action
    }
  } catch (error) {
    console.error('Failed to update song:', error); // Log the error
    yield put(fetchSongsFailure());
  }
}












function* deleteSong(action: ReturnType<typeof deleteSongRequest>) {
  try {
    yield call(axios.delete, `http://localhost:5000/api/songs/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(fetchSongsFailure());
  }
}

function* fetchStats() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'http://localhost:5000/api/stats');
    yield put(fetchStatsSuccess(response.data));
  } catch (error) {
    yield put(fetchStatsFailure());
  }
}

// Watcher saga
function* watchSongActions() {
  yield all([
    takeEvery(fetchSongsRequest.type, fetchSongs),
    takeEvery(addSongRequest.type, addSong),
    takeEvery(updateSongRequest.type, updateSong),
    takeEvery(deleteSongRequest.type, deleteSong),
    takeEvery(fetchStatsRequest.type, fetchStats),
  ]);
}

// Root saga
export default function* rootSaga() {
  yield all([watchSongActions()]);
}

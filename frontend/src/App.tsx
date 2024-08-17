// // import React from 'react';
// // import { Provider } from 'react-redux';
// // import { store } from './redux/store';
// // import SongList from './components/SongList';
// // import SongForm from './components/SongForm';
// // import StatsDisplay from './components/StatsDisplay';
// // import FilterComponent from './components/FilterComponent';

// // const App: React.FC = () => {
  
// //   return (
// //     <Provider store={store}>
// //       <div className="App">
// //         <h1>Song Manager</h1>
// //         <FilterComponent />
// //         <SongList />
// //         <StatsDisplay />
// //       </div>
// //     </Provider>
// //   );
// // };

// // export default App;


// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import Dashboard from './components/Dashboard';

// const App: React.FC = () => {

  
//   return (
//     <Provider store={store}>
//       <Dashboard />
//     </Provider>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './components/Dashboard';
import SongForm from './components/SongForm';
import StatsDisplay from './components/StatsDisplay';
import Song from './components/Song';
// import AppHeader from './components/AppHeader'; // Import your header if needed

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      {/* <AppHeader /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-song" element={<Song />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;

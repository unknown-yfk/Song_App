// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import styled from '@emotion/styled';
// import { RootState } from '../redux/store';
// import { fetchStatsRequest } from '../redux/slices/statsSlice';
// import { space, typography, color, SpaceProps, TypographyProps } from 'styled-system';
// import { FaMusic, FaUser, FaRecordVinyl, FaTags } from 'react-icons/fa'; // Import some icons

// interface StatsWrapperProps extends SpaceProps, TypographyProps {}

// const StatsWrapper = styled.div<StatsWrapperProps>`
//   ${space}
//   ${typography}
//   ${color}
//   border-radius: 8px;
//   padding: 24px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const StatItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 16px;
//   font-size: 1.2rem;

//   svg {
//     margin-right: 8px;
//     color: ${props => props.color || '#495057'};
//   }
// `;

// const SectionTitle = styled.h3`
//   margin-top: 24px;
//   color: ${props => props.color || '#343a40'};
//   border-bottom: 2px solid ${props => props.color || '#495057'};
//   padding-bottom: 4px;
// `;

// const StatsDisplay: React.FC = () => {
//   const dispatch = useDispatch();
//   const { stats, loading } = useSelector((state: RootState) => state.stats);

//   useEffect(() => {
//     dispatch(fetchStatsRequest());
//   }, [dispatch]);

//   if (loading || !stats) {
//     return <div>Loading statistics...</div>;
//   }

//   return (
//     // <StatsWrapper p={3} fontSize={2} bg="white" color="darkblue">
// <StatsWrapper p={3} fontSize={2} >

//       <h2>Statistics</h2>

//       <StatItem color="#28a745">
//         <FaMusic />
//         <span>Total Songs: {stats.totalSongs}</span>
//       </StatItem>

//       <StatItem color="#007bff">
//         <FaUser />
//         <span>Total Artists: {stats.totalArtists}</span>
//       </StatItem>

//       <StatItem color="#ff851b">
//         <FaRecordVinyl />
//         <span>Total Albums: {stats.totalAlbums}</span>
//       </StatItem>

//       <StatItem color="#e83e8c">
//         <FaTags />
//         <span>Total Genres: {stats.totalGenres}</span>
//       </StatItem>

//       <SectionTitle>Songs by Genre:</SectionTitle>
//       <ul>
//         {stats.songsByGenre && Object.entries(stats.songsByGenre).map(([genre, count]) => (
//           <li key={genre}>{genre}: {count}</li>
//         ))}
//       </ul>

//       <SectionTitle>Songs & Albums by Artist:</SectionTitle>
//       <ul>
//         {stats.songsByArtist && Object.entries(stats.songsByArtist).map(([artist, { songs, albums }]) => (
//           <li key={artist}>{artist}: {songs} songs, {albums} albums</li>
//         ))}
//       </ul>

//       <SectionTitle>Songs by Album:</SectionTitle>
//       <ul>
//         {stats.songsByAlbum && Object.entries(stats.songsByAlbum).map(([album, count]) => (
//           <li key={album}>{album}: {count} songs</li>
//         ))}
//       </ul>
//     </StatsWrapper>
//   );
// };

// export default StatsDisplay;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { space, typography, color, flexbox, SpaceProps, TypographyProps, FlexboxProps } from 'styled-system';

import { RootState } from '../redux/store';
import { fetchStatsRequest } from '../redux/slices/statsSlice';
import { FaMusic, FaUser, FaRecordVinyl, FaTags } from 'react-icons/fa'; 
import { Container, Row, Col, Placeholder,List, ListItem, StatItemWrapper,SectionTitle } from '../utils/GridSystem'; // Import the grid components

const StatsDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { stats, loading } = useSelector((state: RootState) => state.stats);

  useEffect(() => {
    dispatch(fetchStatsRequest());
  }, [dispatch]);

  if (loading || !stats) {
    return <div>Loading statistics...</div>;
  }

  return (
    <Container>
      <h2>Statistics</h2>
      <Row>
        <Col >
          <StatItemWrapper>
            <FaMusic color="#28a745" style={{ padding: '8px' }} />
            <span>Total Songs: {stats.totalSongs}</span>
          </StatItemWrapper>
        </Col>
        <Col >
          <StatItemWrapper>
            <FaUser color="#007bff" style={{ padding: '8px' }} />
            <span>Total Artists: {stats.totalArtists}</span>
          </StatItemWrapper>
        </Col>
      </Row>
      <Row>
        <Col >
          <StatItemWrapper>
            <FaRecordVinyl color="#ff851b" style={{ padding: '8px' }} />
            <span>Total Albums: {stats.totalAlbums}</span>
          </StatItemWrapper>
        </Col>
        <Col>
          <StatItemWrapper>
            <FaTags color="#e83e8c" style={{ padding: '8px' }} />
            <span>Total Genres: {stats.totalGenres}</span>
          </StatItemWrapper>
        </Col>
      </Row>
      <Row className="mt-4">
      <Col>
        <SectionTitle>Songs by Genre:</SectionTitle>
        <List>
          {stats.songsByGenre && Object.entries(stats.songsByGenre).map(([genre, count]) => (
            <ListItem key={genre}>
              <span>{genre}</span>
              <span>{count}</span>
            </ListItem>
          ))}
        </List>
      </Col>

      <Col>
        <SectionTitle>Songs & Albums by Artist:</SectionTitle>
        <List>
          {stats.songsByArtist && Object.entries(stats.songsByArtist).map(([artist, { songs, albums }]) => (
            <ListItem key={artist}>
              <span>{artist}</span>
              <span>{songs} songs, {albums} albums</span>
            </ListItem>
          ))}
        </List>
      </Col>

      <Col>
        <SectionTitle>Songs by Album:</SectionTitle>
        <List>
          {stats.songsByAlbum && Object.entries(stats.songsByAlbum).map(([album, count]) => (
            <ListItem key={album}>
              <span>{album}</span>
              <span>{count} songs</span>
            </ListItem>
          ))}
        </List>
      </Col>
    </Row>
    </Container>
  );
};

export default StatsDisplay;

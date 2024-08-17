

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

import React from 'react';
import { Container, Row, Col, Placeholder, StatItemWrapper,SectionTitle } from '../utils/GridSystem'; // Import the grid components


interface StatsSummaryProps {
    stats: {
      songsByGenre: { [key: string]: number };
      songsByArtist: { [key: string]: { songs: number; albums: number } };
      songsByAlbum: { [key: string]: number };
    };
  }
const StatsSummary: React.FC<StatsSummaryProps> = ({ stats }) => {
  return (
    <div>
      <SectionTitle>Songs by Genre:</SectionTitle>
      <ul>
        {stats.songsByGenre && Object.entries(stats.songsByGenre).map(([genre, count]) => (
          <li key={genre}>{genre}: {count}</li>
        ))}
      </ul>

      <SectionTitle>Songs & Albums by Artist:</SectionTitle>
      <ul>
        {stats.songsByArtist && Object.entries(stats.songsByArtist).map(([artist, { songs, albums }]) => (
          <li key={artist}>{artist}: {songs} songs, {albums} albums</li>
        ))}
      </ul>

      <SectionTitle>Songs by Album:</SectionTitle>
      <ul>
        {stats.songsByAlbum && Object.entries(stats.songsByAlbum).map(([album, count]) => (
          <li key={album}>{album}: {count} songs</li>
        ))}
      </ul>
    </div>
  );
};

export default StatsSummary;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { RootState } from '../redux/store';
import { fetchSongsRequest, deleteSongRequest } from '../redux/slices/songSlice';
import SongForm from './SongForm';
import { space, typography, color, SpaceProps, TypographyProps } from 'styled-system';
import { Container, Row, Col, Placeholder } from '../utils/GridSystem'; // Import the grid components
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons for edit and delete
import FilterComponent from './FilterComponent';

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongListWrapperProps extends SpaceProps, TypographyProps { }




const SongListWrapper = styled.div<SongListWrapperProps>`
    ${space}
    ${typography}
    ${color}
  `;


// Styled `ul` to enhance appearance
const StyledList = styled.ul`
  list-style-type: none; // Remove default list bullets
  padding: 0;
  margin: 0;
  margin-top: 20px;
  padding-bottom: 200px;
  background-color: #f0f4f8; // Light background color for the list
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 0 40px; // Add padding to the left and right
`;

const SongItem = styled.li`
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

const ButtonGroup = styled.div`
    display: flex;
    gap: 8px;
  `;

const DeleteButton = styled.button`
    background-color: #ff4d4f;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
      background-color: #ff7875;
    }
  `;

const EditButton = styled.button`
    background-color: #1890ff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
      background-color: #40a9ff;
    }
  `;


const SongDetails = styled.span`
font-size: 16px;
color: #333;
display: flex;
flex-direction: column;
gap: 4px;

& .title {
  font-weight: bold;
  color: #1e90ff; // Highlight title
}

& .artist {
  color: #555; // Slightly lighter for artist
}

& .album-genre {
  font-style: italic;
  color: #888; // Lighter color for album and genre
}
`;


const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading } = useSelector((state: RootState) => state.songs);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

  useEffect(() => {
    dispatch(fetchSongsRequest({}));
  }, [dispatch]);

  const handleDelete = (id: string | undefined) => {
    if (id) {
      dispatch(deleteSongRequest(id));
    } else {
      console.error('Song ID is undefined');
    }
  };

  const handleEdit = (song: Song) => {
    setEditingSong(song);
  };

  const handleFormSubmit = () => {
    setEditingSong(null);
    dispatch(fetchSongsRequest({}));
  };


  return (
    <Container >
      <Row>
        <Col>

          <SongListWrapper p={4} fontSize={7} color="darkwblue">
            {editingSong && (
              <SongForm
                initialData={editingSong}
                isEdit={true}
                onSubmit={handleFormSubmit}
              />
            )}

            {!editingSong && (
              <SongForm
                onSubmit={handleFormSubmit}
              />
            )}
          </SongListWrapper>
        </Col>
      </Row>

      <Row>
        <Col>
            <div>

          <FilterComponent />
          </div>
          <StyledList>            
            {songs.length > 0 ? (
            songs.map((song, index) => (
              <SongItem key={song.id || `song-${index}`}>

                <SongDetails>
                  <span className="title">{song.title}</span>
                  <span className="artist">by {song.artist}</span>
                  <span className="album-genre">({song.album} - {song.genre})</span>
                </SongDetails>
                <ButtonGroup>
                  <EditButton onClick={() => handleEdit(song)}>
                    <FaEdit />
                  </EditButton>
                  <DeleteButton onClick={() => handleDelete(song.id)}>
                    <FaTrash />
                  </DeleteButton>
                </ButtonGroup>
              </SongItem>
            ))
          ) : (
            <div>No songs available</div>
          )}
          </StyledList>
        </Col>
      </Row>
    </Container>
  );
};

export default SongList;

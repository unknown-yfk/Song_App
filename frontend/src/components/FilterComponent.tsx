import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongsRequest } from '../redux/slices/songSlice';
import styled from '@emotion/styled';

const FilterComponent: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilter = (genre: string) => {
    // Pass the genre filter to the fetchSongsRequest action
    dispatch(fetchSongsRequest({ genre }));
  };

  const FilterButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 8px 20px;
  margin: 0 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #357ab8;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5);
  }
`;

  return (
    <div>
      <FilterButton onClick={() => handleFilter('Rock')}>Rock</FilterButton>
      <FilterButton onClick={() => handleFilter('Pop')}>Pop</FilterButton>
      <FilterButton onClick={() => handleFilter('Jazz')}>Jazz</FilterButton>
      <FilterButton onClick={() => handleFilter('')}>All</FilterButton>
    </div>
  );
};

export default FilterComponent;

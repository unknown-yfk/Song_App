

import styled from '@emotion/styled';
import { space, layout, flexbox, grid } from 'styled-system';

// Container component to hold the rows
const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  ${layout};
  ${space};
`;

// Row component to hold columns
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${flexbox};
  ${space};
    margin-bottom: 8px;  /* Adds space at the bottom of each row */

`;

// Col component to handle the grid columns
interface ColProps {
  size?: number; // You can pass size as a prop to control column width
}

const Col = styled.div<ColProps>`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: ${(props) => (props.size ? `0 0 ${(props.size / 12) * 100}%` : '1')};
  max-width: ${(props) => (props.size ? `${(props.size / 12) * 100}%` : '100%')};
  ${layout};
  ${space};
  ${grid};
`;

// Placeholder component for empty or loading state
const Placeholder = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
`;

// StatItemWrapper component to style each stat item
const StatItemWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px; // Adds space between cards

`;

// SectionTitle component for section headings
// const SectionTitle = styled.h3`
//   margin-top: 24px;
//   color: #343a40;
//   border-bottom: 2px solid #495057;
//   padding-bottom: 4px;
//   font-size: 1.5rem;
// `;





const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #4a90e2;
  margin-bottom: 10px;
  border-bottom: 2px solid #4a90e2;
  padding-bottom: 5px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin: 8px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;
export { Container, Row, Col, Placeholder, StatItemWrapper, SectionTitle,List,  ListItem};

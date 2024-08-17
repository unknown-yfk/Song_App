// import React from 'react';
// import styled from '@emotion/styled';
// import { space, layout, color, typography, flexbox } from 'styled-system';
// import { Link } from 'react-router-dom';

// // Styled-components for the header, navigation, and other elements
// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px;
//   background-color: #2c3e50; /* Dark background */
//   color: #ecf0f1; /* Light text color */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow properties */
//   ${space};
//   ${layout};
//   ${color};
//   ${typography};
//   ${flexbox};
// `;

// const Logo = styled.h1`
//   font-size: 1.5rem;
//   margin: 0;
//   color: #ecf0f1;
//   padding-left:100px;
// `;

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 24px;
//   ${flexbox};
//   padding-right: 200px;
// `;

// const NavItem = styled(Link)`
//   color: #ecf0f1;
//   text-decoration: none;
//   font-weight: bold;
//   cursor: pointer;
//   &:hover {
//     color: #3498db; /* Hover color */
//   }
//      padding-right: 10px;
// `;



// export const AppHeader: React.FC = () => (
//   <Header>
//     <Logo>Songs App</Logo>
//     <Nav>
//     <NavItem to="/">Dashboard</NavItem>
//     <NavItem to="/add-songs">Add Songs</NavItem>
//     </Nav>
//   </Header>
// );


import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { space, layout, color, typography, flexbox } from 'styled-system';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #2c3e50; /* Dark background */
  color: #ecf0f1; /* Light text color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow properties */
  ${space};
  ${layout};
  ${color};
  ${typography};
  ${flexbox};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: #ecf0f1;
  padding-left:100px;
`;



const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  ${flexbox};
  padding-right: 200px;
`;
const NavItem = styled(Link)`
    color: #ecf0f1;
   text-decoration: none;
   font-weight: bold;
   cursor: pointer;
   &:hover {
     color: #3498db; /* Hover color */
   }
      padding-right: 10px;
 `;

export const AppHeader: React.FC = () => (
  <Header>
    <Logo>Songs App</Logo>
    <Nav>
      <NavItem to="/">Dashboard</NavItem>
      <NavItem to="/add-song">Add Song</NavItem> {/* Ensure this matches the route */}
    </Nav>
  </Header>
);

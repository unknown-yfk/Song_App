/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from './Box';
import theme from '../theme';

const sidebarStyle = css`
  width: 250px;
  height: 100vh;
  background-color: ${theme.colors.background};
  padding: ${theme.space[3]}px;
  border-right: 1px solid ${theme.colors.border};
  position: fixed;
  top: 0;
  left: 0;
`;

const Sidebar: React.FC = () => (
  <Box css={sidebarStyle}>
    <h2>Dashboard</h2>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </Box>
);

export default Sidebar;

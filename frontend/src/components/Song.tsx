/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from './Box';
import Sidebar from './Sidebar';
import { AppHeader } from './Header';
import theme from '../theme';
import SongList from './SongList';
import FilterComponent from './FilterComponent';
import StatsDisplay from './StatsDisplay';

const dashboardStyle = css`
  padding: 30px;
`;

const Song: React.FC = () => (
  <Box>
    {/* <Sidebar /> */}
    <AppHeader />
    <Box css={dashboardStyle}>
      {/* Main content here */}
      {/* <FilterComponent />
       <SongList />
       <StatsDisplay /> */}
      {/* <StatsDisplay /> */}
      <SongList />
    </Box>
  </Box>
);

export default Song;

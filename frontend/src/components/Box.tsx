/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { space, width, fontSize, color,padding, layout, flexbox, SpaceProps, LayoutProps, FontSizeProps, ColorProps } from 'styled-system';

interface BoxProps extends SpaceProps, LayoutProps, FontSizeProps, ColorProps {
  as?: React.ElementType;
}

const Box = styled('div')<BoxProps>`
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${layout};
  ${flexbox};
    ${padding}; 
`;

export default Box;

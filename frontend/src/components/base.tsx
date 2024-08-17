import React from 'react';
import styled from '@emotion/styled';
import { space, width, fontSize, color, flexbox, ResponsiveValue } from 'styled-system';
import { baseCss } from './baseCss';
import { CSSProperties } from 'react';

type StyledProps = {
  m?: ResponsiveValue<string | number>;
  mt?: ResponsiveValue<string | number>;
  mr?: ResponsiveValue<string | number>;
  mb?: ResponsiveValue<string | number>;
  ml?: ResponsiveValue<string | number>;
  mx?: ResponsiveValue<string | number>;
  my?: ResponsiveValue<string | number>;
  p?: ResponsiveValue<string | number>;
  pt?: ResponsiveValue<string | number>;
  pr?: ResponsiveValue<string | number>;
  pb?: ResponsiveValue<string | number>;
  pl?: ResponsiveValue<string | number>;
  px?: ResponsiveValue<string | number>;
  py?: ResponsiveValue<string | number>;
  fontSize?: ResponsiveValue<string | number>;
  column?: boolean;
  [key: string]: any;
};

const defaultExcludedProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'fontSize',
];

export const flex = (props: StyledProps) => flexbox(props);
export const order = (props: StyledProps) => flexbox(props);
const wrap = (props: StyledProps) => flexbox(props);
const direction = (props: StyledProps) => flexbox(props);
const align = (props: StyledProps) => flexbox(props);
const justify = (props: StyledProps) => flexbox(props);
const column = (props: StyledProps) => (props.column ? 'flex-direction:column;' : null);

const BaseComponent = (tag: keyof JSX.IntrinsicElements, omitProps: string[] = []) =>
  styled(tag, {
    shouldForwardProp: (prop) => !defaultExcludedProps.concat(omitProps).includes(prop),
  })<StyledProps>`
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${flex};
  ${order};
  ${wrap};
  ${column};
  ${direction};
  ${align};
  ${justify};
  ${baseCss};
`;

export default BaseComponent;

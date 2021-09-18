import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { Button as ButtonAntd, Space as SpaceAntd, Typography } from 'antd';

const resolveTagFromProps = (props) => {
  const resolveProps = {};

  Object.keys(props).forEach((key) => {
    if (typeof props[key] == 'boolean') {
      if (props[key] === true) {
        resolveProps[key] = `${props[key]}`;
      }
      return;
    }
    resolveProps[key] = props[key];
  });
  return resolveProps;
};

// Container
// --
const Main = styled.div``;

// Typography
// --
const { Title: TitleAntd, Text: TextAntd } = Typography;
// Title
const TitleStyled = styled(TitleAntd)`
  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
  ${({ type }) => type && `color: var(--${type}) !important`};
  ${({ breakline }) =>
    Boolean(breakline) &&
    `
    word-break: break-word; 
    overflow-wrap: break-word;
  `};
  ${({ ellipsis }) =>
    Boolean(ellipsis) &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};
`;

const TitleSkeleton = ({ loading, ...restProps }) => {
  return (
    <>
      {loading && <Skeleton height={30} width={180} />}
      {!loading && <TitleStyled {...resolveTagFromProps(restProps)} />}
    </>
  );
};
// Text
const TextStyled = styled(TextAntd)`
  ${({ uppercase }) => Boolean(uppercase) && `text-transform: uppercase`};
  font-size: ${({ size }) => (size ? `${size}rem` : '1rem')};
  font-weight: ${({ weight }) => (weight ? `${weight}` : '400')};
  ${({ type }) => type && `color: var(--${type}) !important`};
  ${({ breakline }) =>
    Boolean(breakline) &&
    `
    word-break: break-word; 
    overflow-wrap: break-word;
  `};
  ${({ ellipsis }) =>
    Boolean(ellipsis) &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};
`;

const TextSkeleton = ({ loading, ...restProps }) => {
  return (
    <>
      {loading && <Skeleton height={25} width={180} />}
      {!loading && <TextStyled {...resolveTagFromProps(restProps)} />}
    </>
  );
};

// Button
// --
const ButtonStyled = styled(ButtonAntd)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Space
// --
const alignTypes = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
};

const SpaceStyled = styled(SpaceAntd)`
  display: flex;
  ${({ direction }) => `flex-direction: ${direction === 'vertical' ? 'column' : 'row'}`};
  ${({ align }) => align && `align-items: ${alignTypes[align]}`};
  ${({ justify }) => justify && `justify-content: ${alignTypes[justify]}`};
  ${({ wrap }) => wrap && `flex-wrap: wrap`};
`;

export { Main, TitleSkeleton as Title, TextSkeleton as Text, ButtonStyled as Button, SpaceStyled as Space };

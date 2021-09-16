import styled from 'styled-components';
import { Button as ButtonAntd, Progress as ProgressAntd, Typography } from 'antd';
import Skeleton from 'react-loading-skeleton';

// Container
// --
const FlexBox = (direction) => `
  display: flex;
  flex-direction: ${direction || 'row'};
`;

const Main = styled.div``;

// Typography
// --
const { Title: TitleAntd, Text: TextAntd } = Typography;
// Title
const TitleStyled = styled(TitleAntd)`
  text-transform: ${({ uppercase }) => (Boolean(uppercase) ? 'uppercase' : 'initial')};
`;

const TitleSkeleton = ({ loading, ...restProps }) => {
  return (
    <>
      {loading && <Skeleton height={35} width={180} />}
      {!loading && <TitleStyled {...restProps} />}
    </>
  );
};
// Text
const TextStyled = styled(TextAntd)`
  text-transform: ${({ uppercase }) => (Boolean(uppercase) ? 'uppercase' : 'initial')};
  font-size: ${({ size }) => `${size}px` || '15px'};
  font-weight: ${({ weight }) => `${weight}` || '400'};
`;

const TextSkeleton = ({ loading, ...restProps }) => {
  return (
    <>
      {loading && <Skeleton height={25} width={180} />}
      {!loading && <TextStyled {...restProps} />}
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

// Progress
// --
const ProgressStyled = styled(ProgressAntd)`
  .ant-progress-circle-path {
    stroke: var(--primary) !important;
  }
  .ant-progress-text {
    color: initial !important;
  }
`;

export { 
  Main, 
  FlexBox, 
  TitleSkeleton as Title, 
  TextSkeleton as Text, 
  ButtonStyled as Button,
  ProgressStyled as Progress 
};

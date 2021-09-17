import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { 
  Button as ButtonAntd, 
  Progress as ProgressAntd, 
  Image as ImageAntd, 
  Input, 
  Typography 
} from 'antd';

// Container
// --
const Main = styled.div``;

// Typography
// --
const { Title: TitleAntd, Text: TextAntd } = Typography;
// Title
const TitleStyled = styled(TitleAntd)`
  ${({ uppercase }) => uppercase && `text-transform: uppercase`};
  ${({ color }) => color && `color: ${color} !important`};
  ${({ breakline }) => Boolean(breakline) && `
    word-break: break-word; 
    overflow-wrap: break-word;
  `};
  ${({ ellipsis }) => Boolean(ellipsis) && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};
`;

const TitleSkeleton = ({ loading, ...restProps }) => {
  return (
    <>
      {loading && <Skeleton height={30} width={180} />}
      {!loading && <TitleStyled {...restProps} />}
    </>
  );
};
// Text
const TextStyled = styled(TextAntd)`
  ${({ uppercase }) => Boolean(uppercase) && `text-transform: uppercase`};
  font-size: ${({ size }) => size ? `${size}px` : '15px'};
  font-weight: ${({ weight }) => weight ? `${weight}` : '400'};
  ${({ color }) => color && `color: ${color}`};
  ${({ breakline }) => Boolean(breakline) && `
    word-break: break-word; 
    overflow-wrap: break-word;
  `};
  ${({ ellipsis }) => Boolean(ellipsis) && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};
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

// Input
// --
const { Search: SearchAntd } = Input;
// Search
const SearchStyled = styled(SearchAntd)`
  .ant-input-affix-wrapper {
    box-shadow: none !important;
  }
`;

// Image
// --
const ImageStyled = styled(ImageAntd)`
  .ant-image-mask-info {
    display: flex !important;
    align-items: center;
  }
`;

export { 
  Main, 
  TitleSkeleton as Title, 
  TextSkeleton as Text, 
  ButtonStyled as Button,
  SearchStyled as Search,
  ProgressStyled as Progress,
  ImageStyled as Image,
};

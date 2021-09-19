import React from 'react';
import styled from 'styled-components';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';

const FavContainer = styled.div`
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
  ${({ size }) => `font-size: ${size}rem`};
  z-index: 3;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

const HeroFavButton = ({ favorite, size = 1.8, handleClick }) => {
  return (
    <FavContainer size={size} onClick={handleClick}>
      <Tooltip placement="top" title={favorite ? 'remove fav' : 'add fav'}>
        {favorite ? <HeartFilled /> : <HeartOutlined />}
      </Tooltip>
    </FavContainer>
  );
};

export default HeroFavButton;

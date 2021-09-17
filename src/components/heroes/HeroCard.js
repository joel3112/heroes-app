import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { Text, Title } from '../../styles/index';
import Skeleton from 'react-loading-skeleton';

const CardContainer = styled(Link)`
  overflow: hidden;
  outline: none;
  transition: color 0.3s;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-gray-light);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  overflow: hidden;
  z-index: 3;
  padding: 0;
`;

const CardImage = styled.div`
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--placeholder-bg);

  a:hover & {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

const CardBody = styled.div`
  border-top: 5px solid var(--primary);
  height: 110px;
  padding: 10px 13px;
  position: relative;
  transition: color 0.3s;

  ::before {
    content: '';
    background: var(--primary);
    height: 100%;
    position: absolute;
    bottom: 100%;
    left: 0;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    width: 100%;
    z-index: -1;
  }
  a:hover &::before {
    transform: translate3d(0, 100%, 0);
    z-index: 2;
  }
`;

const SkeletonData = () => {
  return (
    <Space direction="vertical">
      <Skeleton width={100} height={20} />
      <Skeleton width={150} height={15} />
    </Space>
  );
};

const HeroCard = ({ id, superhero, image, full_name }) => {
  return (
    <CardContainer to={`./heroes/${id}`}>
      <CardHeader>
        <CardImage style={{ backgroundImage: `url(${image})` }}></CardImage>
      </CardHeader>
      <CardBody>
        {!id ? (
          SkeletonData()
        ) : (
          <Space direction="vertical" size={[2, 2]}>
            <Title level={5} ellipsis style={{ zIndex: 3 }}>
              {superhero.toUpperCase()}
            </Title>
            <Text size={13} weight={300} style={{ opacity: 0.6, zIndex: 3 }}>
              {full_name.toUpperCase()}
            </Text>
          </Space>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default React.memo(HeroCard);

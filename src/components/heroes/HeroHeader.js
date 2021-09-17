import React from 'react';
import styled from 'styled-components';
import { Space } from 'antd';
import { Title } from '../../styles';

const HeaderContainer = styled(Space)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: calc(40px + 20px + 16px) !important;
  padding-top: 20px;
  margin-bottom: 40px;
  background-color: var(--white);
  
  hr {
    margin: 0 !important;
  }
`;

const TitleContainer = styled(Space)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
`;

const HeroHeader = ({ title, children, loading }) => {
  return (
    <HeaderContainer direction="vertical" size={[15, 15]}>
      <TitleContainer direction="horizontal" size={[15, 15]} wrap>
        <Title level={3} color="var(--primary)" loading={loading}>
          {title}
        </Title>
        {children}
      </TitleContainer>
      <hr />
    </HeaderContainer>
  );
};

export default HeroHeader;

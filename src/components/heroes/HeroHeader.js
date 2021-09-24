import React from 'react';
import styled from 'styled-components';
import { Title, Space } from '../../styles';

const HeaderContainer = styled(Space)`
  width: 100%;
  min-height: 76px !important;
  padding-top: 20px;
  margin-bottom: 30px;
  background-color: var(--white);
  
  hr {
    margin: 0 !important;
  }
`;

const HeroHeader = ({ title, children, loading }) => {
  return (
    <HeaderContainer direction="vertical" justify="between" size={[15, 15]}>
      <Space 
        direction="horizontal"
        justify="between"
        wrap
        size={[15, 15]}
        style={{ minHeight: 40 }}>
        <Title level={3} type="primary" loading={loading}>
          {title}
        </Title>
        {children}
      </Space>
      <hr />
    </HeaderContainer>
  );
};

export default HeroHeader;

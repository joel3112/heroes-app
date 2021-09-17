import React from 'react'
import styled from 'styled-components';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { Row, Col } from 'antd';
import { Title } from '../../styles/index';
import HeroPowerstats from './HeroPowerstats';
import HeroData from './HeroData';
import { isMobileTablet } from '../../utils/helpers';

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-wrap: wrap;
  align-items: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'center' : 'initial')};
  text-align: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'center' : 'initial')};
`;

const HeroProfileData = ({ hero, loading }) => {
  const breakpoint = useBreakpointViewport();
  const { superhero, full_name, powerstats, ...restData } = hero;

  return (
    <DataContainer breakpoint={breakpoint}>
      <Row>
        <Col>
          <Title level={3} uppercase="true" loading={loading}>
            {full_name || superhero}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={20} lg={20} xl={16} xxl={12}>
          <HeroPowerstats powerstats={powerstats} loading={loading} />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={18} xl={15} xxl={12}>
          <HeroData hero={restData} loading={loading} />
        </Col>
      </Row>
    </DataContainer>
  );
};

export default HeroProfileData;

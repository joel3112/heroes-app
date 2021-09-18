import React from 'react'
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { Row, Col } from 'antd';
import { Space, Title } from '../../styles/index';
import HeroPowerstats from './HeroPowerstats';
import HeroData from './HeroData';
import { isMobileTablet } from '../../utils/helpers';

const HeroProfileData = ({ hero, loading }) => {
  const breakpoint = useBreakpointViewport();
  const { superhero, full_name, powerstats, ...restData } = hero;

  return (
    <Space 
      direction="vertical" 
      align={isMobileTablet(breakpoint) && 'center'}
      size={[25, 25]}
      wrap
      breakpoint={breakpoint}
      style={{ textAlign: isMobileTablet(breakpoint) && 'center' }}>
      <Row>
        <Col>
          <Title level={3} uppercase loading={loading}>
            {full_name || superhero}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={20} lg={20} xl={16} xxl={16}>
          <HeroPowerstats powerstats={powerstats} loading={loading} />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={18} xl={15} xxl={12}>
          <HeroData hero={restData} loading={loading} />
        </Col>
      </Row>
    </Space>
  );
};

export default HeroProfileData;

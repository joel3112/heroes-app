import React from 'react';
import styled from 'styled-components';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { Row, Col } from 'antd';
import { Image, Title } from '../../styles/index';
import HeroPowerstats from './HeroPowerstats';
import HeroData from './HeroData';
import { isMobileTablet, isMobileTabletMedium } from '../../utils/helpers';

const widthImage = (breakpoint) => (isMobileTabletMedium(breakpoint) ? 280 : 312);
const heightImage = (breakpoint) => (isMobileTabletMedium(breakpoint) ? 373 : 426);
const gapImage = 50;

const RowContainer = styled.div`
  display: flex;
  flex-direction: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'column' : 'row')};
  align-items: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'center' : 'initial')};
  flex-wrap: wrap;
  gap: ${gapImage}px;
`;

const ImageContainer = styled.div`
  width: ${({ breakpoint }) => widthImage(breakpoint)}px;
  min-width: ${({ breakpoint }) => widthImage(breakpoint)}px;
  height: ${({ breakpoint }) => heightImage(breakpoint)}px;
  display: flex;
  background-color: var(--placeholder-bg);
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gapImage / 2}px;
  flex-wrap: wrap;
  align-items: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'center' : 'initial')};
  text-align: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'center' : 'initial')};
  max-width: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'initial' : `calc(100% - ${widthImage(breakpoint)}px - ${gapImage}px)`)};
`;

const HeroProfile = ({ hero, loading }) => {
  const { image, full_name, superhero, powerstats, ...restData } = hero;
  const breakpoint = useBreakpointViewport();

  return (
    <RowContainer breakpoint={breakpoint}>
      <ImageContainer breakpoint={breakpoint}>
        {!loading && <Image width="100%" height="100%" src={image} />}
      </ImageContainer>
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
    </RowContainer>
  );
};

export default HeroProfile;

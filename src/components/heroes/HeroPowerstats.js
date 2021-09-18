import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { Row, Col, Space, Progress } from 'antd';
import { Text } from '../../styles';
import { isMobileTabletMedium } from '../../utils/helpers';

const widthPowerstats = (breakpoint) => (isMobileTabletMedium(breakpoint) ? 270 : 480);
const widthPowerstat = 70;
const heightPowerstat = 96;

const percentage = (value) => 
  <Progress 
    type="circle" 
    strokeWidth={11} 
    width={widthPowerstat} 
    percent={value} 
    format={() => `${value}%`} />
;

const SkeletonContainer = (breakpoint) => {
  return (
    <Skeleton height={heightPowerstat} width="90vw" style={{ maxWidth: widthPowerstats(breakpoint) }} />
  )
};

const HeroPowerstats = ({ powerstats = {}, loading }) => {
  const breakpoint = useBreakpointViewport();

  if (loading) {
    return SkeletonContainer(breakpoint);
  }

  return (
    <Row gutter={[12, 12]} style={{ marginBottom: '10px', maxWidth: widthPowerstats(breakpoint) }}>
      {Object.keys(powerstats).map((powerKey) => (
        <Col xs={8} sm={8} md={8} lg={4} key={powerKey}>
          <Space direction="vertical" align="center" size={[8, 8]}>
            {percentage(powerstats[powerKey], breakpoint)}
            <Text size={0.8} weight="300">
              {powerKey}
            </Text>
          </Space>
        </Col>
      ))}
    </Row>
  );
};

export default HeroPowerstats;

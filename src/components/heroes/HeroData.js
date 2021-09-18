import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { Row, Col, Space } from 'antd';
import { Text } from '../../styles';
import { isMobileTablet } from '../../utils/helpers';

const items = {
  place_of_birth: { label: 'Place of birth' },
  publisher: { label: 'Publisher' },
  alter_ego: { span: 2, label: 'Alter ego' },
  aliases: { span: 2, label: 'Aliases' },
  first_appearance: { span: 2, label: 'First appearance' },
};

const SkeletonContainer = (breakpoint) => {
  const margin = isMobileTablet(breakpoint) ? '0 auto' : '0';
  
  return (
    <>
      <Skeleton height={20} width={180} style={{ maxWidth: '75%', margin }} />
      <Skeleton height={20} width={320} style={{ maxWidth: '90%', margin }} />
    </>
  );
};

const HeroData = ({ hero, loading }) => {
  const breakpoint = useBreakpointViewport();

  return (
    <Row gutter={[30, 20]} style={{ marginBottom: '60px' }}>
      {Object.keys(items).map((item) => {
        const { label, span = 1 } = items[item];
        const value = hero[item];

        return (
          <Col xs={24} sm={24} md={12 * span} lg={12 * span} key={item}>
            <Space 
              direction="vertical" 
              align={isMobileTablet(breakpoint) ? 'center' : 'start'} 
              size={[3, 3]}>
              {loading ? (
                SkeletonContainer(breakpoint)
              ) : (
                <>
                  <Text size={0.8} type="placeholder-text" uppercase="true">
                    {label}
                  </Text>
                  <Text>{Array.isArray(value) ? value.join(', ') : value}</Text>
                </>
              )}
            </Space>
          </Col>
        );
      })}
    </Row>
  );
};

export default HeroData;

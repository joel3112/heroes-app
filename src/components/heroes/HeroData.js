import React from 'react';
import { Row, Col, Space } from 'antd';
import { Text } from '../../styles';
import Skeleton from 'react-loading-skeleton';

const items = {
  place_of_birth: { label: 'Place of birth' },
  publisher: { label: 'Publisher' },
  alter_ego: { span: 2, label: 'Alter ego' },
  aliases: { span: 2, label: 'Aliases' },
  first_appearance: { span: 2, label: 'First appearance' },
};

const SkeletonContainer = () => (
  <>
    <Skeleton height={20} width={180} style={{ maxWidth: '75%' }} />
    <Skeleton height={20} width={320} style={{ maxWidth: '100%' }} />
  </>
);

const HeroData = ({ hero, loading }) => {
  return (
    <Row gutter={[30, 20]} style={{ marginBottom: '60px' }}>
      {Object.keys(items).map((item) => {
        const { label, span = 1 } = items[item];
        const value = hero[item];

        return (
          <Col xs={24} sm={24} md={12 * span} lg={12 * span} key={item}>
            {loading ? (
              SkeletonContainer()
            ) : (
              <Space direction="vertical" size={[3, 3]}>
                <Text size={14} color="var(--placeholder-text)" uppercase="true">
                  {label}
                </Text>
                <Text size={16}>{Array.isArray(value) ? value.join(', ') : value}</Text>
              </Space>
            )}
          </Col>
        );
      })}
    </Row>
  );
};

export default HeroData;

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { FlexBox } from '../../styles';
import Skeleton from 'react-loading-skeleton';

const items = {
  place_of_birth: { label: 'Place of birth' },
  publisher: { label: 'Publisher' },
  alter_ego: { span: 2, label: 'Alter ego' },
  aliases: { span: 2, label: 'Aliases' },
  first_appearance: { span: 2, label: 'First appearance' },
};

const DescriptionItem = styled.div`
  ${FlexBox('column')}

  label {
    color: var(--placeholder-text);
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 3px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

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
            <DescriptionItem>
              {loading ? (
                SkeletonContainer()
              ) : (
                <>
                  <label>{label.toUpperCase()}</label>
                  <span>{Array.isArray(value) ? value.join(',') : value}</span>
                </>
              )}
            </DescriptionItem>
          </Col>
        );
      })}
    </Row>
  );
};

export default HeroData;

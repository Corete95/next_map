import React, { useState } from 'react';
import useSWR from 'swr';
import styles from '../../styles/detail.module.scss';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import { Store } from '@/types/store';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${expanded ? styles.expanded : ''} ${
        currentStore ? styles.selected : ''
      }`}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={() => setExpanded(!expanded)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};

export default DetailSection;

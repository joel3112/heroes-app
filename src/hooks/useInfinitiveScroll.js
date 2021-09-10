import { useCallback, useEffect, useState } from 'react';

export const useInfinitiveScroll = (totalItems, maxItemsByPage) => {
  const [block, setBlock] = useState(1);
  const [items, setItems] = useState([]);

  const itemsByBlock = useCallback(
    (block) => {
      return totalItems.slice((block - 1) * maxItemsByPage, block * maxItemsByPage);
    },
    [maxItemsByPage, totalItems]
  );

  const fetchMoreData = (e) => {
    const moreItems = itemsByBlock(block + 1);

    setBlock(block + 1);
    setItems([...items, ...moreItems]);
  };

  useEffect(() => {
    setItems(itemsByBlock(1));
  }, [itemsByBlock]);

  return [items, fetchMoreData];
};

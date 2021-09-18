import { useCallback, useEffect, useState } from 'react';

export const useInfinitiveScroll = (totalItems, maxItemsByPage) => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    hasMore: true,
  });
  const [block, setBlock] = useState(1);

  const itemsByBlock = useCallback(
    (block) => {
      return totalItems.slice((block - 1) * maxItemsByPage, block * maxItemsByPage);
    },
    [maxItemsByPage, totalItems]
  );

  const fetchMoreData = () => {
    setState({
      ...state,
      loading: true,
    });

    if (state.items.length > totalItems.length) {
      setState({
        ...state,
        loading: false,
        hasMore: false,
      });
      return;
    }

    const moreItems = itemsByBlock(block + 1);
    setBlock(block + 1);
    setState({
      ...state,
      items: [...state.items, ...moreItems],
      loading: false,
    });
  };

  useEffect(() => {
    setState({
      items: itemsByBlock(1),
      loading: false,
      hasMore: true,
    });
  }, [itemsByBlock]);

  return [state, fetchMoreData];
};

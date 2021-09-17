import { publishers } from './constants';

export const getHeroesByPublisher = (heroes, publisher = '') => {
  const validPublishers = publishers[publisher] || [];

  if (!Object.keys(publishers).includes(publisher)) {
    console.error(`Publisher "${publisher}" no es válido`);
  }
  return heroes.filter((hero) => validPublishers.includes(hero.publisher));
};

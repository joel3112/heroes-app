export const getHeroById = (heroes = [], id = '') => {
  return heroes.find((hero) => hero.id === id);
};

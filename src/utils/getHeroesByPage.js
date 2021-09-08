export const getHeroesByPage = (heroes, page, maxHeroesByPage) => {
  const totalHeroes = heroes;
  const filterHeroes = totalHeroes.slice((page - 1) * maxHeroesByPage, page * maxHeroesByPage);

  return filterHeroes;
};

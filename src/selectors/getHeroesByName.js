export const getHeroesByName = (heroes = [], name = '') => {
  if (!name) {
    return [];
  }

  name = name.toLocaleLowerCase();
  return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name));
};

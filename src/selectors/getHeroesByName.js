export const getHeroesByName = (heroes = [], name = '') => {
  if (!name) {
    return heroes;
  }

  name = name.toLocaleLowerCase();
  return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name));
};

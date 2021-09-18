import { publishers } from './constants';
import objectPath from 'object-path';

// Mappers

export const heroMapper = (hero) => {
  if (!hero) {
    return {};
  }

  const get = objectPath.get;
  
  return {
    id: hero.id,
    superhero: hero.name,
    image: get(hero, 'images.lg'),
    publisher: get(hero, 'biography.publisher'),
    first_appearance: get(hero, 'biography.firstAppearance'),
    full_name: get(hero, 'biography.fullName'),
    aliases: get(hero, 'biography.aliases'),
    powerstats: get(hero, 'powerstats'),
    alter_ego: get(hero, 'biography.alterEgos'),
    place_of_birth: get(hero, 'biography.placeOfBirth'),
    connections: get(hero, 'connections'),
  };
}

// Utils

export const isMobile = (breakpoint) => breakpoint === 'xs';
export const isMobileTablet = (breakpoint) => breakpoint === 'xs' || breakpoint === 'sm';
export const isMobileTabletMedium = (breakpoint) => breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md';

// Hero utils

export const getHeroById = (heroes = [], id = '') => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroesByName = (heroes = [], name = '') => {
  if (!name) {
    return heroes;
  }

  name = name.toLocaleLowerCase();
  return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name));
};

export const getHeroesByPublisher = (heroes, publisher = '') => {
  const validPublishers = publishers[publisher] || [];

  if (!Object.keys(publishers).includes(publisher)) {
    console.error(`Publisher "${publisher}" no es válido`);
  }
  return heroes.filter((hero) => validPublishers.includes(hero.publisher));
};

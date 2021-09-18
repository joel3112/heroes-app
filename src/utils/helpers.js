import { BREAKPOINTS, PUBLISHER } from './constants';
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
    totalPowerstats: Object.keys(get(hero, 'powerstats')).reduce((total, key) => total + get(hero, 'powerstats')[key], 0),
  };
};

// Utils

export const getDeviceConfig = (width) => {
  if (width < 576) {
    return BREAKPOINTS.XS;
  } else if (width < 768) {
    return BREAKPOINTS.SM;
  } else if (width < 992) {
    return BREAKPOINTS.MD;
  } else if (width < 1200) {
    return BREAKPOINTS.LG;
  } else if (width < 1600) {
    return BREAKPOINTS.XL;
  } else {
    return BREAKPOINTS.XXL;
  }
};
export const isMobile = (breakpoint) => breakpoint === BREAKPOINTS.XS;
export const isMobileTablet = (breakpoint) => [BREAKPOINTS.XS, BREAKPOINTS.SM].includes(breakpoint);
export const isMobileTabletMedium = (breakpoint) => [BREAKPOINTS.XS, BREAKPOINTS.SM, BREAKPOINTS.MD].includes(breakpoint);

export const sortArrayByKey = (array, key, descending = false) => {
  const arraySorted = array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
  return descending ? arraySorted.reverse() : arraySorted;
};

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
  const validPublishers = PUBLISHER[publisher] || [];

  if (!Object.keys(PUBLISHER).includes(publisher)) {
    console.error(`Publisher "${publisher}" no es válido`);
  }
  return heroes.filter((hero) => validPublishers.includes(hero.publisher));
};

export const getHeroesMainByPublisher = (heroes, ids) => {
  return heroes.length > ids.length ? heroes.filter((hero) => ids.includes(hero.id)) : heroes;
};

export const getHeroesPowerstatsSorted = (heroes) => {
  return sortArrayByKey(heroes, 'totalPowerstats', true);
};

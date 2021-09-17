import objectPath from 'object-path';

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
  };
}

export const isMobile = (breakpoint) => breakpoint === 'xs';
export const isMobileTablet = (breakpoint) => breakpoint === 'xs' || breakpoint === 'sm';
export const isMobileTabletMedium = (breakpoint) => breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md';

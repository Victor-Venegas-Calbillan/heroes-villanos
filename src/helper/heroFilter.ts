import { HeroResp } from "../interfaces/hero";

export const herosFiltered = (
  hero: HeroResp[],
  publisher: string
) => {
  const herosFiltered = hero.filter(
    hero => hero.biography.publisher === publisher
  );

  if (herosFiltered.length === 0) {
    return hero.filter(
      hero =>
        hero.biography.publisher !== "DC Comics" &&
        hero.biography.publisher !== "Marvel Comics"
    );
  }

  return herosFiltered;
};

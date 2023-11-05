import { FC } from "react";
import { HeroResp } from "../../interfaces/heros";
import { HeroCard } from "./HeroCard";

interface Props {
  heros: HeroResp[];
}

export const HeroList: FC<Props> = ({ heros }) => {
  return (
    <>
      {heros.map((hero: HeroResp) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </>
  );
};

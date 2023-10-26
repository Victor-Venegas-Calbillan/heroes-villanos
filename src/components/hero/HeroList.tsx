import { FC } from "react";
import { HeroResp } from "../../api/hero";

interface Props {
  heros: HeroResp[];
}

export const HeroList: FC<Props> = ({ heros }) => {
  return (
    <>
      {heros.map((hero: HeroResp) => (
        <div className="hero__card" key={hero.id}>
          <div className="hero__card__header">
            <img src={hero.images.sm} alt={hero.name} />
          </div>
          <div className="hero__card__body">
            <h3 className="hero__card__title">{hero.name}</h3>
            <ul className="hero__info">
              <li>
                Full name:{" "}
                {hero.biography.fullName
                  ? hero.biography.fullName
                  : hero.name}
              </li>
              <li>
                Publisher:{" "}
                {hero.biography.publisher
                  ? hero.biography.publisher
                  : "N/A"}
              </li>
              <li>
                Alignment:{" "}
                {hero.biography.alignment
                  ? hero.biography.alignment
                  : "N/A"}
              </li>
              <li>race: {hero.appearance.race}</li>
              <li>
                heigth: {hero.appearance.height[0]} or{" "}
                {hero.appearance.height[1]}{" "}
              </li>
              <li>
                weight: {hero.appearance.weight[0]} or{" "}
                {hero.appearance.weight[1]}{" "}
              </li>
            </ul>
            <button className="card__button">Ver mas</button>
          </div>
        </div>
      ))}
    </>
  );
};

import { PropsWithChildren, FC } from "react";
import { HeroResp } from "../../interfaces/heros";
import { NavLink } from "react-router-dom";

interface Props extends PropsWithChildren {
  hero: HeroResp;
}

export const HeroCard: FC<Props> = ({ hero }) => {
  return (
    <div className="hero__card">
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
            {hero.appearance.height[1]}
          </li>
          <li>
            weight: {hero.appearance.weight[0]} or{" "}
            {hero.appearance.weight[1]}
          </li>
        </ul>
        <NavLink to={`/${hero.id}`} className="card__button">
          Ver mas
        </NavLink>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Navbar } from "./components/ui/Navbar";
import { HeroResp } from "./api/hero";

function App() {
  const [heros, setHeros] = useState([]);

  const getHeros = async () => {
    const resp = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
    );
    const data = await resp.json();

    setHeros(data);
  };

  useEffect(() => {
    getHeros();
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="titulo">All heros and villans</h1>
      <div className="heros__container">
        {heros.map((hero: HeroResp) => (
          <div className="hero__card" key={hero.id}>
            <div className="hero__card__header">
              <img src={hero.images.sm} alt={hero.name} />
            </div>
            <div className="hero__card__boy">
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
      </div>
    </>
  );
}

export default App;

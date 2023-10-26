import { useEffect, useState } from "react";
import { HeroList } from "../components/hero/HeroList";
import { LayoutPage } from "../layout/LayoutPage";

export const HomePage = () => {
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
    <LayoutPage title="All heros and villans">
      <HeroList heros={heros} />
    </LayoutPage>
  );
};

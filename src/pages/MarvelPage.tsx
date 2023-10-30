import { HeroList } from "../components/hero/HeroList";
import { herosFiltered } from "../helper/heroFilter";
import { useFetch } from "../hooks/useFetch";
import { LayoutPage } from "../layout/LayoutPage";

export const MarvelPage = () => {
  const url =
    "https://akabab.github.io/superhero-api/api/all.json";
  const { data, isLoading } = useFetch(url);

  const heros = herosFiltered(data, "Marvel Comics");

  return (
    <>
      <LayoutPage title="Marvel Comics">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <HeroList heros={heros} />
        )}
      </LayoutPage>
    </>
  );
};

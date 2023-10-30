import { HeroList } from "../components/hero/HeroList";
import { useFetch } from "../hooks/useFetch";
import { LayoutPage } from "../layout/LayoutPage";

export const HomePage = () => {
  const url =
    "https://akabab.github.io/superhero-api/api/all.json";
  const { data: heros, isLoading } = useFetch(url);

  return (
    <LayoutPage title="All heros and villans">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <HeroList heros={heros} />
      )}
    </LayoutPage>
  );
};

import { HeroList } from "../components/hero/HeroList";
import { herosFiltered } from "../helper/heroFilter";
import { useFetch } from "../hooks/useFetch";
import { LayoutPage } from "../layout/LayoutPage";

export const OtherPages = () => {
  const url =
    "https://akabab.github.io/superhero-api/api/all.json";
  const { data, isLoading } = useFetch(url);

  const heros = herosFiltered(data, "Others");
  return (
    <>
      <LayoutPage title="Others publisher">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <HeroList heros={heros} />
        )}
      </LayoutPage>
    </>
  );
};

import { HeroList } from "../components/hero/HeroList";
import { Loader } from "../components/ui/Loader";
import { herosFiltered } from "../helper/heroFilter";
import { useFetch } from "../hooks/useFetch";
import { HeroResp } from "../interfaces/heros";
import { LayoutPage } from "../layout/LayoutPage";

export const MarvelPage = () => {
  const url =
    "https://akabab.github.io/superhero-api/api/all.json";
  const { data, isLoading } = useFetch<HeroResp[]>(url);

  const heros = herosFiltered(data, "Marvel Comics");

  return (
    <>
      <LayoutPage title="Marvel Comics">
        {isLoading ? <Loader /> : <HeroList heros={heros} />}
      </LayoutPage>
    </>
  );
};

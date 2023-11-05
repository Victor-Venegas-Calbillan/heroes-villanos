import { HeroList } from "../components/hero/HeroList";
import { Loader } from "../components/ui/Loader";
import { herosFiltered } from "../helper/heroFilter";
import { useFetch } from "../hooks/useFetch";
import { HeroResp } from "../interfaces/heros";
import { LayoutPage } from "../layout/LayoutPage";

export const OtherPages = () => {
  const url =
    "https://akabab.github.io/superhero-api/api/all.json";
  const { data, isLoading } = useFetch<HeroResp[]>(url);

  const heros = herosFiltered(data, "Others");
  return (
    <>
      <LayoutPage title="Others publisher">
        {isLoading ? <Loader /> : <HeroList heros={heros} />}
      </LayoutPage>
    </>
  );
};

import { HeroList } from "../components/hero/HeroList";
import { Loader } from "../components/ui/Loader";
import { useFetch } from "../hooks/useFetch";
import { HeroResp } from "../interfaces/heros";
import { LayoutPage } from "../layout/LayoutPage";

export const HomePage = () => {
  const url =
    "https://akabab.github.io/superhero-api/api/all.json";
  const { data: heros, isLoading } = useFetch<HeroResp[]>(url);

  return (
    <LayoutPage title="All heros and villans">
      {isLoading ? (
        <Loader />
      ) : (
        <HeroList heros={heros as HeroResp[]} />
      )}
    </LayoutPage>
  );
};

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "../components/ui/Loader";
import { Navbar } from "../components/ui/Navbar";
import { HeroResp } from "../interfaces/heros";

export const HeroPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch<HeroResp>(
    `https://akabab.github.io/superhero-api/api/id/${id}.json`
  );

  return (
    <>
      <Navbar />
      <div className="main__container">
        {isLoading ? <Loader /> : <h1>{data?.name}</h1>}
      </div>
    </>
  );
};

import { FC } from "react";
import { HeroList } from "../components/hero/HeroList";
import { Loader } from "../components/ui/Loader";
import { HeroResp } from "../interfaces/heros";
import { LayoutPage } from "../layout/LayoutPage";
interface Props {
  data: HeroResp[];
  isLoading: boolean;
}

export const HomePage: FC<Props> = ({ data, isLoading }) => {
  return (
    <LayoutPage title="All heros and villans">
      {isLoading ? <Loader /> : <HeroList heros={data} />}
    </LayoutPage>
  );
};

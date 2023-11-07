import { FC } from "react";

import { HeroList } from "../components/hero/HeroList";
import { Loader } from "../components/ui/Loader";
import { herosFiltered } from "../helper/heroFilterByPublisher";
import { LayoutPage } from "../layout/LayoutPage";
import { HeroResp } from "../interfaces/heros";

interface Props {
  data: HeroResp[];
  isLoading: boolean;
}

export const MarvelPage: FC<Props> = ({ data, isLoading }) => {
  const heros = herosFiltered(data, "Marvel Comics");

  return (
    <>
      <LayoutPage title="Marvel Comics">
        {isLoading ? <Loader /> : <HeroList heros={heros} />}
      </LayoutPage>
    </>
  );
};

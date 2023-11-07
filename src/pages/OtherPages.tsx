import { FC } from "react";
import { HeroList } from "../components/hero/HeroList";
import { Loader } from "../components/ui/Loader";
import { herosFiltered } from "../helper/heroFilterByPublisher";
import { HeroResp } from "../interfaces/heros";
import { LayoutPage } from "../layout/LayoutPage";

interface Props {
  data: HeroResp[];
  isLoading: boolean;
}

export const OtherPages: FC<Props> = ({ data, isLoading }) => {
  const heros = herosFiltered(data, "Others");
  return (
    <>
      <LayoutPage title="Others publisher">
        {isLoading ? <Loader /> : <HeroList heros={heros} />}
      </LayoutPage>
    </>
  );
};

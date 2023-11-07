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

export const DcPage: FC<Props> = ({ data, isLoading }) => {
  const heros = herosFiltered(data, "DC Comics");
  return (
    <>
      <LayoutPage title="DC Comics">
        {isLoading ? <Loader /> : <HeroList heros={heros} />}
      </LayoutPage>
    </>
  );
};

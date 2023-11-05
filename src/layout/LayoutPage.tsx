import { FC, PropsWithChildren } from "react";
import { Navbar } from "../components/ui/Navbar";

interface Props extends PropsWithChildren {
  title?: string;
}

export const LayoutPage: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1 className="titulo">{title}</h1>
        <div className="heros__container">{children}</div>
      </main>
    </>
  );
};

import { FC } from "react";
import { Panel, NavIdProps } from "@vkontakte/vkui";
import { Navbar } from "../components/Navbar";
import { CardsBank } from "./CardsBank";

export const Home: FC<NavIdProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <Navbar />
      <div style={{ marginTop: "5px" }}>
        <CardsBank />
      </div>
    </Panel>
  );
};

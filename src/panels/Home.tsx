import { FC } from "react";
import { Panel, NavIdProps, Card } from "@vkontakte/vkui";
import { Navbar } from "../components/Navbar";

export const Home: FC<NavIdProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <Navbar></Navbar>
      <Card>Conteeeeent!</Card>
    </Panel>
  );
};

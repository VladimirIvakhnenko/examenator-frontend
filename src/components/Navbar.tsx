import {
  Header,
  Group,
  CardGrid,
  Card,
} from "@vkontakte/vkui";

export const Navbar = () => {
  return (
    <Group
      header={
        <Header mode="secondary" style={{ letterSpacing: "0.2rem" }}>
          Главная страница
        </Header>
      }
    >
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: "92%" }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: "92%" }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: "92%" }} />
        </Card>
      </CardGrid>
    </Group>
  );
};

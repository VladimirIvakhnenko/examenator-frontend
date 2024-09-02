import { Div, Group, Skeleton } from "@vkontakte/vkui";

export const CardsBank = () => {
  const numbers = new Array(1000).fill(null);
  const skeletons = numbers.map(() => <Skeleton width="100%" />);

  return (
    <Group>
      <Div>{skeletons}</Div>
    </Group>
  );
};

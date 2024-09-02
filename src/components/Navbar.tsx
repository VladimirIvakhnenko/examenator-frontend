import {
  Icon28BookOutline,
  Icon28RobotOutline,
  Icon28SettingsOutline,
  Icon28UserCircleOutline,
} from "@vkontakte/icons";
import { IconButton, Flex, Text } from "@vkontakte/vkui";

export const Navbar = () => {
  const noop = () => {};
  const navStyles = {
    opacity: 0.7,
    background: "linear-gradient(180deg, #FF6F61 4%, #6F61FF 100%)",
    color: "white",
    borderBottomLeftRadius: "50px",
  };
  const navButton = { paddingRight: "15px" };
  return (
    <div style={navStyles}>
      <Flex align="start" justify="space-between" style={{ margin: 25 }}>
        <Flex align="center" justify="space-between">
          <IconButton label="Мои варианты" onClick={noop}>
            <Flex align="center" style={navButton}>
              <Icon28UserCircleOutline />
              <Text weight="1">Мои варианты</Text>
            </Flex>
          </IconButton>
        </Flex>

        <Flex align="end">
          <IconButton label="Банк вариантов" onClick={noop}>
            <Flex align="center" style={navButton}>
              <Icon28BookOutline />
              <Text weight="1">Банк вариантов</Text>
            </Flex>
          </IconButton>

          <IconButton label="Сгенерировать вариант" onClick={noop}>
            <Flex align="center" style={navButton}>
              <Icon28RobotOutline />
              <Text weight="1">Сгенерировать вариант</Text>
            </Flex>
          </IconButton>

          <IconButton label="Настройки" onClick={noop}>
            <Icon28SettingsOutline />
          </IconButton>
        </Flex>
      </Flex>
    </div>
  );
};

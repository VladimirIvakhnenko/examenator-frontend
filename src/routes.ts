import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from "@vkontakte/vk-mini-apps-router";

export const DEFAULT_ROOT = "default_root";

export const DEFAULT_VIEW = "default_view";

export const DEFAULT_VIEW_PANELS = {
  HOME: "home",
  GENERATE_VARIANT: "genVariant",
  SETTINGS: "settings",
  CARDS_BANK: "examCards",
  MY_CARDS: "myCards",
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, "/", []),
      createPanel(
        DEFAULT_VIEW_PANELS.GENERATE_VARIANT,
        `/${DEFAULT_VIEW_PANELS.GENERATE_VARIANT}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.SETTINGS,
        `/${DEFAULT_VIEW_PANELS.SETTINGS}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.CARDS_BANK,
        `/${DEFAULT_VIEW_PANELS.CARDS_BANK}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.MY_CARDS,
        `/${DEFAULT_VIEW_PANELS.MY_CARDS}`,
        []
      ),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());

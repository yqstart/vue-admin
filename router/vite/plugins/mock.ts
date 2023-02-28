import { viteMockServe } from "vite-plugin-mock";

const setupMockPlugin = (isBuild: boolean) => {
  return viteMockServe({
    mockPath: "mock",
    localEnabled: !isBuild,
  });
};

export default setupMockPlugin;

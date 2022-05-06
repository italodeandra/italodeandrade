import { matchers } from "@emotion/jest";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/config", () => () => ({
  serverRuntimeConfig: { appEnv: "test" },
}));

expect.extend(matchers);

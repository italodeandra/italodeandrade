import CoolGray from "@italodeandra/ui/styles/colors/CoolGray";
import LightBlue from "@italodeandra/ui/styles/colors/LightBlue";
import createTheme from "@italodeandra/ui/styles/createTheme";

declare module "@mui/material/Button/Button" {
  // noinspection JSUnusedGlobalSymbols
  interface ButtonPropsColorOverrides {
    coolGrayOutlined: true;
  }
}
declare module "@mui/material/styles" {
  // noinspection JSUnusedGlobalSymbols
  interface Palette {
    coolGrayOutlined: Palette["primary"];
  }

  // noinspection JSUnusedGlobalSymbols
  interface PaletteOptions {
    coolGrayOutlined?: PaletteOptions["primary"];
  }
}

export const createDarkTheme = () =>
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: LightBlue.N500,
      },
      coolGrayOutlined: {
        main: CoolGray.N400,
      },
    },
  });

export const darkTheme = createDarkTheme();

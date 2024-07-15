import tamaguiConfig from "@/lib/tamagui.config";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";

const Layout = (): JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#467FD3",
            },
            headerTintColor: "#ffffff",
            headerTitle: "Memo App",
            headerBackTitle: "Back",
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: "bold",
            },
          }}
        />
      </ThemeProvider>
    </TamaguiProvider>
  );
};

export default Layout;

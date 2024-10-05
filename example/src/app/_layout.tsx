import { Stack } from "expo-router";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import FilterBottomSheet from "../components/FilterBottomSheet";
import WelcomeBottomSheet from "../components/WelcomeBottomSheet";
import AuthBottomSheet from "../components/AuthBottomSheet";
import { BottomSheets } from "react-native-bottom-sheets";

const bottomSheets = {
  FilterBottomSheet,
  WelcomeBottomSheet,
  AuthBottomSheet,
};

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <BottomSheets sheets={bottomSheets} enablePanDownToClose />
      </GestureHandlerRootView>
    </>
  );
}

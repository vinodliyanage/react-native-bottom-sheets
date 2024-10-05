import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import { useBottomSheets } from "react-native-bottom-sheets";

const Home = () => {
  const { openBottomSheet } = useBottomSheets();

  const handleBottomSheetOpen = (name: string) => () => {
    const params = {
      data: { name },
      description: "this is params object",
    };

    const callbackFunction = () => {
      console.log("callback function");
    };

    openBottomSheet(name, params, callbackFunction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bottom Sheets</Text>
      <View style={styles.buttonContainer}>
        <Button title="Open Welcome" onPress={handleBottomSheetOpen("WelcomeBottomSheet")} />
        <Button title="Open Auth" onPress={handleBottomSheetOpen("AuthBottomSheet")} />
        <Button title="Open Filter" onPress={handleBottomSheetOpen("FilterBottomSheet")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 50,
  },
  title: {
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});

export default Home;

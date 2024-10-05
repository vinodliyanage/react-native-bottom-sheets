import { StyleSheet, View, Text } from "react-native";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { BottomSheet, BottomSheetProps } from "react-native-bottom-sheets";

const WelcomeBottomSheet = ({
  defaultProps,
  params,
  name,
  open,
  openBottomSheet,
  closeBottomSheet,
}: BottomSheetProps) => {
  return (
    <BottomSheet snapPoints={["80%"]} {...defaultProps}>
      <BottomSheetScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>Welcome Bottom Sheet (ScrollView)</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "blue" }]}>
          <Text>3</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "yellow" }]}>
          <Text>4</Text>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  box: {
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

export default WelcomeBottomSheet;

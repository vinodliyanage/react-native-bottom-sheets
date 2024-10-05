import { StyleSheet, View, Text } from "react-native";
import { BottomSheet, BottomSheetProps } from "react-native-bottom-sheets";

const FilterBottomSheet = ({
    defaultProps,
    params,
    name,
    open,
    openBottomSheet,
    closeBottomSheet,
  }: BottomSheetProps) => {
  return (
    <BottomSheet snapPoints={["60%"]} {...defaultProps}>
      <View style={styles.container}>
        <Text>Filter Bottom Sheet</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default FilterBottomSheet;

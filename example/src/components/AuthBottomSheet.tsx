import { StyleSheet, View, Text } from "react-native";
import { BottomSheetProps, BottomSheet } from "react-native-bottom-sheets";

const AuthBottomSheet = ({
  defaultProps,
  params,
  name,
  open,
  openBottomSheet,
  closeBottomSheet,
}: BottomSheetProps) => {
  return (
    <BottomSheet snapPoints={["30%"]} {...defaultProps}>
      <View style={styles.container}>
        <Text>Auth Bottom Sheet</Text>
        <Text>{JSON.stringify(params, null, 2)}</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default AuthBottomSheet;

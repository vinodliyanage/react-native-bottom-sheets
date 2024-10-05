import useBottomSheets from "../hooks/useBottomSheets";
import { BottomSheetProps as GorhomBottomSheetProps } from "@gorhom/bottom-sheet";

interface BottomSheetsProps extends Omit<GorhomBottomSheetProps, "children"> {
  sheets: Record<string, React.ComponentType<any>>;
}

const BottomSheets = ({ sheets, ...props }: BottomSheetsProps) => {
  const bottomSheet = useBottomSheets();

  const { name, open } = bottomSheet;

  const Sheet = sheets[name as string] || (() => <></>);

  const sheetProps = { ...bottomSheet, defaultProps: props };

  return open ? <Sheet {...sheetProps} /> : <></>;
};

export default BottomSheets;

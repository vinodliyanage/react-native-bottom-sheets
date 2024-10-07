import useBottomSheets from "../hooks/useBottomSheets";
import { BottomSheetsProps } from "../types";

const BottomSheets = ({ sheets, ...props }: BottomSheetsProps) => {
  const bottomSheet = useBottomSheets();

  const { name, open } = bottomSheet;

  const Sheet = sheets[name as string] || (() => <></>);

  const sheetProps = { ...bottomSheet, defaultProps: props };

  return open ? <Sheet {...sheetProps} /> : <></>;
};

export default BottomSheets;

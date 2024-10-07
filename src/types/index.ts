import { BottomSheetProps as GorhomBottomSheetProps } from "@gorhom/bottom-sheet";

export interface BottomSheetsProps extends Omit<GorhomBottomSheetProps, "children"> {
  sheets: Record<string, React.ComponentType<any>>;
}

export type BottomSheetProps = {
  open: boolean;
  params: any;
  openBottomSheet: (props?: any) => void;
  closeBottomSheet: (props?: any) => void;
  defaultProps: GorhomBottomSheetProps;
};

export type EventCallback = (...args: any[]) => void;

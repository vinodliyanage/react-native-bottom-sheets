import { BottomSheetProps as GorhomBottomSheetProps } from "@gorhom/bottom-sheet";

export type BottomSheetProps = {
  name: string;
  open: boolean;
  params: any;
  openBottomSheet: (props?: any) => void;
  closeBottomSheet: (props?: any) => void;
  defaultProps: GorhomBottomSheetProps;
};

export type EventCallback = (...args: any[]) => void;

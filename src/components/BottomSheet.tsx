import { forwardRef } from "react";
import {
  default as GorhomBottomSheet,
  BottomSheetProps as GorhomBottomSheetProps,
} from "@gorhom/bottom-sheet";
import useBottomSheets from "../hooks/useBottomSheets";

const BottomSheet = forwardRef<GorhomBottomSheet, GorhomBottomSheetProps>(
  ({ children, onClose, ...props }, ref) => {
    const { closeBottomSheet } = useBottomSheets();

    const handleClose = () => {
      closeBottomSheet();
      onClose?.();
    };

    return (
      <GorhomBottomSheet ref={ref} index={0} onClose={handleClose} {...props}>
        {children}
      </GorhomBottomSheet>
    );
  }
);

export default BottomSheet;

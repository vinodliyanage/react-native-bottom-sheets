import { useEffect, useState } from "react";
import bottomSheetManager from "../utils/BottomSheetManager";
import { EventCallback } from "../types";

/**
 * Custom hook for managing bottom sheet state and operations.
 * @returns An object containing bottom sheet state and control functions.
 */
const useBottomSheets = () => {
  const [name, setName] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState<any | null>(null);

  /**
   * Opens a bottom sheet.
   * @param name - The name of the bottom sheet to open.
   * @param params - Parameters to pass to the bottom sheet.
   */
  const openBottomSheet = (name: string, params: any = null, callback?: EventCallback) => {
    bottomSheetManager.open(name, params, callback);
  };

  /**
   * Closes a bottom sheet.
   * @param sheetName - The name of the bottom sheet to close.
   * @param callback - Optional callback to be called after closing the bottom sheet.
   */
  const closeBottomSheet = (callback?: EventCallback) => {
    bottomSheetManager.close(callback);
  };

  useEffect(() => {
    const handleOpen = (name: string, params: any = {}, callback: EventCallback) => {
      setOpen(true);
      setName(name);
      setParams(params);
      callback?.();
    };

    const handleClose = (callback: EventCallback) => {
      setName(null);
      setOpen(false);
      setParams(null);
      callback?.();
    };

    bottomSheetManager.on("open", handleOpen);
    bottomSheetManager.on("close", handleClose);

    return () => {
      bottomSheetManager.off("open", handleOpen);
      bottomSheetManager.off("close", handleClose);
    };
  }, []);

  return { name, open, params, openBottomSheet, closeBottomSheet };
};

export default useBottomSheets;

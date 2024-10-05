import { EventCallback } from "../types";
import EventEmitter from "./EventEmitter";

/**
 * BottomSheetManager class for managing bottom sheet operations.
 * Extends EventEmitter to provide event-based communication.
 */
class BottomSheetManager extends EventEmitter {
  /**
   * Opens a bottom sheet.
   * @param name - The name of the bottom sheet to open.
   * @param params - Parameters to pass to the bottom sheet.
   * @param callback - Optional callback to be called after opening the bottom sheet.
   */
  open(name: string, params: any, callback?: EventCallback) {
    this.emit("open", name, params, callback);
  }

  /**
   * Closes a bottom sheet.
   * @param name - The name of the bottom sheet to close.
   * @param callback - Optional callback to be called after closing the bottom sheet.
   */
  close(callback?: EventCallback) {
    this.emit("close", callback);
  }
}

// Create a singleton instance of BottomSheetManager
const bottomSheetManager = new BottomSheetManager();

export default bottomSheetManager;

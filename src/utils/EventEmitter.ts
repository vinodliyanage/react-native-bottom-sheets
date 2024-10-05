import { EventCallback } from "../types";

class EventEmitter {
  private events: { [key: string]: EventCallback[] } = {};

  emit(event: string, ...args: any[]) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(...args));
    }
  }

  on(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event: string, callback: EventCallback) {
    this.events[event] = this.events[event]?.filter((cb) => cb !== callback) || [];
  }
}

export default EventEmitter;

/* eslint-disable no-console */
export default class Logger {
  static log(data: unknown): void {
    console.log(data);
  }

  static startTimer(name: string): void {
    console.time(name);
  }

  static endTimer(name: string): void {
    console.timeEnd(name);
  }
}

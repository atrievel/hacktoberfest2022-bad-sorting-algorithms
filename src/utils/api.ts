export default class Api<T extends number | string> {
  public async compareValues(a: T, b: T): Promise<number> {
    await new Promise((r) =>
      setTimeout(r, Math.floor(Math.random() * 4900) + 100)
    );

    if (a > b) {
      return 1;
    } else if (a == b) {
      return 0;
    } else {
      return -1;
    }
  }
}

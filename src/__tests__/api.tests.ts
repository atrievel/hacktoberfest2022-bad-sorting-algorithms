import Api from "@utils/api";

describe("Api Util Test Suite", () => {
  it("returns 1 when a > b (numbers)", async () => {
    // Arrange
    const uut = new Api<number>();

    // Act
    const result = await uut.compareValues(10, 5);

    // Assert
    expect(result).toEqual(1);
  });

  it("returns 0 when a = b (numbers)", async () => {
    // Arrange
    const uut = new Api<number>();

    // Act
    const result = await uut.compareValues(100, 100);

    // Assert
    expect(result).toEqual(0);
  });

  it("returns -1 when a < b (numbers)", async () => {
    // Arrange
    const uut = new Api<number>();

    // Act
    const result = await uut.compareValues(12, 58);

    // Assert
    expect(result).toEqual(-1);
  });

  it("returns 1 when a > b (string)", async () => {
    // Arrange
    const uut = new Api<string>();

    // Act
    const result = await uut.compareValues("zyx", "abc");

    // Assert
    expect(result).toEqual(1);
  });

  it("returns 0 when a = b (string)", async () => {
    // Arrange
    const uut = new Api<string>();

    // Act
    const result = await uut.compareValues("same", "same");

    // Assert
    expect(result).toEqual(0);
  });

  it("returns -1 when a < b (string)", async () => {
    // Arrange
    const uut = new Api<string>();

    // Act
    const result = await uut.compareValues("abc", "zyx");

    // Assert
    expect(result).toEqual(-1);
  });
});

import DictatorSort from "@algorithms/dictator-sort";
const sortedNumbers: readonly number[] = [2, 5, 1234];
const sortedStrings: string[] = ["list", "of", "strings"];

describe("Dictator Sort Test Suite", () => {
  let randomOrderNumbers: number[] = [];
  let randomOrderStrings: string[] = [];
  beforeAll(() => {
    randomOrderNumbers = [2, 1, 5, 1234, 58, 21];
    randomOrderStrings = ["list", "of", "A", "strings"];
  });
  it("sorts numbers in asc order by default", () => {
    // Arrange
    const uut = new DictatorSort(randomOrderNumbers);

    // Act
    const sorted = uut.sort();
    // Assert
    expect(sorted).toEqual(sortedNumbers);
  });

  it("sorts numbers in desc order", () => {
    // Arrange
    const uut = new DictatorSort(randomOrderNumbers, true);

    // Act
    const sorted = uut.sort().reverse();

    // Assert
    expect(sorted).toEqual(sortedNumbers);
  });

  it("sorts strings in asc order by default", () => {
    // Arrange
    const uut = new DictatorSort(randomOrderStrings);

    // Act
    const sorted = uut.sort();

    // Assert
    expect(sorted).toEqual(sortedStrings);
  });

  it("sorts strings in desc order", () => {
    // Arrange
    const uut = new DictatorSort(randomOrderStrings, true);

    // Act
    const sorted = uut.sort().reverse();

    // Assert
    expect(sorted).toEqual(sortedStrings);
  });
});

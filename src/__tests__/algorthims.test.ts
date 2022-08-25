import BubbleSort from "@algorithms/bubble-sort";

const sortedNumbers: readonly number[] = [1, 2, 5, 21, 58, 1234];
const sortedStrings: string[] = ["A", "list", "of", "strings"];

describe("Sorting Algorithm Test Suite", () => {
  let randomOrderNumbers: number[] = [];
  let randomOrderStrings: string[] = [];

  beforeAll(() => {
    randomOrderNumbers = [...sortedNumbers].sort(() => Math.random() - 0.5);
    randomOrderStrings = [...sortedStrings].sort(() => Math.random() - 0.5);
  });

  describe("Bubble Sort Test Suite", () => {
    it("sorts numbers in desc order by default", () => {
      // Arrange
      const uut = new BubbleSort(randomOrderNumbers);

      // Act
      const sorted = uut.sort();

      // Assert
      expect(sorted).toEqual(sortedNumbers);
    });

    it("sorts numbers in asc order", () => {
      // Arrange
      const uut = new BubbleSort(randomOrderNumbers, true);

      // Act
      const sorted = uut.sort().reverse();

      // Assert
      expect(sorted).toEqual(sortedNumbers);
    });

    it("sorts strings in desc order by default", () => {
      // Arrange
      const uut = new BubbleSort(randomOrderStrings);

      // Act
      const sorted = uut.sort();

      // Assert
      expect(sorted).toEqual(sortedStrings);
    });

    it("sorts strings in asc order", () => {
      // Arrange
      const uut = new BubbleSort(randomOrderStrings, true);

      // Act
      const sorted = uut.sort().reverse();

      // Assert
      expect(sorted).toEqual(sortedStrings);
    });
  });
});

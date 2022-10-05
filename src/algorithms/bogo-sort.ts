import SortingAlgorthim from "@contracts/sorting-algorithm";

export default class BogoSort<
  T extends number | string
> extends SortingAlgorthim<T> {
  constructor(collectionToSort: T[], sortDesc = false) {
    super(collectionToSort, sortDesc);
  }

  sort(): T[] {
    let sortedCollection = [...this.collectionToSort];

    while (!this.isSorted(sortedCollection)) {
      sortedCollection = this.shuffleArray(sortedCollection);
    }

    return this.sortDesc ? sortedCollection.reverse() : sortedCollection;
  }

  private isSorted(array: T[]): boolean {
    return array.every((v, i, a) => !i || a[i - 1] <= v);
  }

  private shuffleArray(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}

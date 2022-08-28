import SortingAlgorthim from "@contracts/sorting-algorithm";

export default class BubbleSort<T extends number | string> extends SortingAlgorthim<T> {
  constructor(collectionToSort: T[], sortDesc = false) {
    super(collectionToSort, sortDesc);
  }

  sort(): T[] {
    const sortedCollection = [...this.collectionToSort];

    for (let i = 0; i < sortedCollection.length; i++) {
      for (let j = 0; j < sortedCollection.length - 1; j++) {
        if (sortedCollection[j] > sortedCollection[j + 1]) {
          const swap = sortedCollection[j];
          sortedCollection[j] = sortedCollection[j + 1];
          sortedCollection[j + 1] = swap;
        }
      }
    }

    return this.sortDesc ? sortedCollection.reverse() : sortedCollection;
  }
}

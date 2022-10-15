import SortingAlgorthim from "@contracts/sorting-algorithm";

export default class DictatorSort<
  T extends number | string
> extends SortingAlgorthim<T> {
  constructor(collectionToSort: T[], sortDesc = false) {
    super(collectionToSort, sortDesc);
  }

  sort(): T[] {
    const sortedCollection = [...this.collectionToSort];
    for (let i = 1; i < this.collectionToSort.length; i++) {
      if (sortedCollection[i] < sortedCollection[i - 1]) {
        // remove the current one
        sortedCollection.splice(i, 1);
        i--;
      }
    }

    return this.sortDesc ? sortedCollection.reverse() : sortedCollection;
  }
}

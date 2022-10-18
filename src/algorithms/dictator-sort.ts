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
      // for each element in the collection
      if (sortedCollection[i] < sortedCollection[i - 1]) {
        // if the current element is not sorted with respect to how far we've reversed the array, remove the current one
        sortedCollection.splice(i, 1);
        // decrement i because we removed an element and the index length changes
        i--;
      }
    }

    return this.sortDesc ? sortedCollection.reverse() : sortedCollection; // reverse if the constructor specified so.
  }
}

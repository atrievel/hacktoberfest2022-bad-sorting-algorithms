export default abstract class SortingAlgorithm<T extends number | string> {
  protected collectionToSort: ReadonlyArray<T>;
  protected sortDesc: boolean;

  /**
   *
   * @param collectionToSort a collection of T<number | string> to sort
   * @param sortDesc sort the data in descending order if true
   */
  constructor(collectionToSort: T[], sortDesc = false) {
    this.collectionToSort = collectionToSort;
    this.sortDesc = sortDesc;
  }

  /**
   * Implement this abstraction as the sorting method
   */
  abstract sort(): T[];
}

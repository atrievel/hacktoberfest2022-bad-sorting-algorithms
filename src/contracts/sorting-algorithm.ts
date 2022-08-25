export default abstract class SortingAlgorithm<T extends number | string> {
  protected collectionToSort: ReadonlyArray<T>;
  protected sortAsc: boolean;

  /**
   *
   * @param collectionToSort a collection of T<number | string> to sort
   * @param sortAsc sort the data ascending if true
   */
  constructor(collectionToSort: T[], sortAsc = false) {
    this.collectionToSort = collectionToSort;
    this.sortAsc = sortAsc;
  }

  /**
   * Implement this abstraction as the sorting method
   */
  abstract sort(): T[];
}

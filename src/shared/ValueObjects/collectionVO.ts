class CollectionVO {
  protected collection = [];
  protected total = 0;

  constructor(collection = []) {
    this.collection = collection;
    this.total = collection.length;
  }

  static create(collection = []) {
    return new this(collection);
  }

  count(): number {
    return this.collection.length;
  }

  items<T>(): Array<T> {
    return this.collection;
  }

  addItem(item: []): void {
    this.collection = [...this.collection, ...item];
  }
}

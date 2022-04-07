class ObjectVO {
  protected valuePrimitive = {};

  constructor(value: Record<string, unknown>) {
    this.valuePrimitive = value;
  }

  exists(value: string): boolean {
    return Object.values(value).indexOf(value) >= 0;
  }

  add(value: Record<string, unknown>): void {
    Object.assign(this.valuePrimitive, value);
  }

  reset() {
    this.valuePrimitive = {};
  }

  getItem<T>(key: string): T {
    return this.valuePrimitive[key];
  }

  deleteItem<T>(key: string): void {
    this.getItem(key) && delete this.valuePrimitive[key];
  }
  
}

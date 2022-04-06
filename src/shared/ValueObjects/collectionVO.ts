class CollectionVO {
    
    protected  collection = [];

    constructor(collection = []) {
        this.collection = collection;
    }

    static create(collection = []){
        return new this(collection);
    }

    total(): Number{
        return this.collection.length;
    }

    items<T>(): Array<T>{
        return this.collection;
    }
}
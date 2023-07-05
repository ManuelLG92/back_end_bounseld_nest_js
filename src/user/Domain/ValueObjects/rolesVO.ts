import { CollectionVO } from 'src/shared/Domain/ValueObjects/collectionVO';

export class RolesVO extends CollectionVO {
  static byDefault() {
    return new RolesVO(['user']);
  }
}

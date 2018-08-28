export class DefaultPriceService {
  taxesList = [{id: 1, text: 'tax category HS'}, {id: 2, text: 'tax category HTS'}];

  getTaxesList() {
    return this.taxesList;
  }
}

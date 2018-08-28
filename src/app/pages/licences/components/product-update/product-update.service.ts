export class ProductUpdateService {
  productUpdatesTable = {
    headings: [
      'List price',
      'ERP',
      'ERP margin',
      'sales margin',
      'Fixed $',
      'effective sales price',
      'effective sales margin',
      'MARGIN type',
      'discount table'
    ],
    bodyData: {
      listPrice: { currency: 'CHF', value: 93.62 },
      erp: { currency: 'CHF', value: 93.62 },
      erpMargin: { value: 93.62 },
      salesMargin: { value: 93.62 },
      fixedPrice: { currency: 'CHF', value: 12.18 },
      effectivePrice: { currency: 'CHF', value: 93.62 },
      effectiveMargin: { value: 93.62 },
      taxes: [{id: 1, text: 'tax category HS'}, {id: 2, text: 'tax category HTS'}]
    }
  };

  getTbleData() {
    return this.productUpdatesTable;
  }
}

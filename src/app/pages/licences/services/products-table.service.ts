export class ProductsTableService {
  tableHeaderFields = [ 'name', 'list price', 'erp', 'erp margin', 'sales margin', 'fixed $', 'effective sales price', 'effective sales margin', 'discount type', 'discount table' ];

  productsList = [
    {
      isChecked: false,
      date: '22.04.18',
      productName: 'Advanced eDiscovery St',
      price: { value: 74.92, currency: 'CHF' },
      erp: { value: 93.62, currency: 'CHF', status: 'ascending' },
      erpMargin: { value: 15.50, measuring: '%' },
      salesMargin: { value: 15.50, measuring: '%' },
      fixedPrice: { value: 93.62, currency: 'CHF' },
      effectiveSalesPrice: { value: 74.92, currency: 'CHF' },
      effectiveSalesMargin: { value: 15.50, measuring: '%' },
      discountType: 'D',
      discountTable: 'Azure discount table #1',
      id: 1
    },
    {
      isChecked: false,
      date: '12.04.18',
      productName: 'Audio Conferencing',
      price: { value: 17.78, currency: 'CHF' },
      erp: { value: 14.92, currency: 'CHF', status: 'descending' },
      erpMargin: { value: 18.50, measuring: '%' },
      salesMargin: { value: 18.50, measuring: '%' },
      fixedPrice: { value: 14.92, currency: 'CHF' },
      effectiveSalesPrice: { value: 74.92, currency: 'CHF' },
      effectiveSalesMargin: { value: 18.50, measuring: '%' },
      discountType: 'F',
      discountTable: 'Azure discount table #2',
      id: 2
    },
    {
      isChecked: false,
      date: '23.08.18',
      productName: 'Azure Active Directory B',
      price: { value: 4.55, currency: 'CHF' },
      erp: { value: 53.74, currency: 'CHF', status: 'ascending' },
      erpMargin: { value: 5.00, measuring: '%' },
      salesMargin: { value: 5.00, measuring: '%' },
      fixedPrice: { value: 53.74, currency: 'CHF' },
      effectiveSalesPrice: { value: 74.92, currency: 'CHF' },
      effectiveSalesMargin: { value: 5.00, measuring: '%' },
      discountType: 'D',
      discountTable: 'Azure discount table #3',
      id: 3
    },
    {
      isChecked: false,
      date: '02.04.18',
      productName: 'Helios Active',
      price: { value: 7.22, currency: 'CHF' },
      erp: { value: 7.92, currency: 'CHF', status: 'ascending' },
      erpMargin: { value: 25.00, measuring: '%' },
      salesMargin: { value: 25.00, measuring: '%' },
      fixedPrice: { value: 7.92, currency: 'CHF' },
      effectiveSalesPrice: { value: 74.92, currency: 'CHF' },
      effectiveSalesMargin: { value: 25.00, measuring: '%' },
      discountType: 'F',
      discountTable: 'Azure discount table #4',
      id: 4
    }
  ];

  getData(dataType) {
    return this[dataType];
  }
}

export class ProductDiscountsService {
  discountTableList = [
    'Discount table#1',
    'Discount table#5',
    'Discount table Azure',
    'Discount table#1',
    'Discount table#2',
    'Discount table#3',
    'Discount table#5',
    'Discount table Azure'
  ];

  discountTableData = {
    tableHeadings: ['Level', 'discount %', 'CALCULATED margin %', 'fixed $', 'effective sales price $', 'effective margin %'],
    tableBody: [
      { discount: 0, calcMargin: 17.00, fixed: 2.00, effectivePrice: 12.50, effectiveMargin: 0 },
      { discount: 5, calcMargin: 16.15, fixed: 3.00, effectivePrice: 12.25, effectiveMargin: 5 },
      { discount: 10, calcMargin: 14.54, fixed: 1.80, effectivePrice: 12.25, effectiveMargin: 10 },
      { discount: 20, calcMargin: 15.00, fixed: 1.70, effectivePrice: 12.00, effectiveMargin: 15 },
      { discount: 20, calcMargin: 20.00, fixed: 1.60, effectivePrice: 11.75, effectiveMargin: 20 },
      { discount: 25, calcMargin: 25.00, fixed: 1.50, effectivePrice: 11.50, effectiveMargin: 25 },
      { discount: 30, calcMargin: 30.00, fixed: 1.40, effectivePrice: 11.50, effectiveMargin: 30 },
      { discount: 35, calcMargin: 35.00, fixed: 1.30, effectivePrice: 11.25, effectiveMargin: 35 },
      { discount: 40, calcMargin: 40.00, fixed: 1.20, effectivePrice: 11.00, effectiveMargin: 40 },
      { discount: 45, calcMargin: 45.00, fixed: 1.10, effectivePrice: 10.45, effectiveMargin: 45 }
    ]
  };

  getDiscountTableList() {
    return this.discountTableList;
  }

  getDiscountTableData() {
    return this.discountTableData;
  }
}

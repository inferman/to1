export class CustomersService {
  customersData = [
    {
      selected: false,
      company: 'A wonder Company',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      currency: 'USD',
      discountLevelMonthly: 5,
      discountLevelAnnually: 5
    },
    {
      selected: false,
      company: 'Carmakers Gmbh',
      city: 'Houston',
      state: 'Baden Wue',
      country: 'Germany',
      currency: 'EUR',
      discountLevelMonthly: 2,
      discountLevelAnnually: 9
    },
    {
      selected: false,
      company: 'Eco Engineers Ltd.',
      city: 'San Antonio',
      state: 'Ontario',
      country: 'UK',
      currency: 'NZD',
      discountLevelMonthly: 2,
      discountLevelAnnually: 2
    },
    {
      selected: false,
      company: 'Free Billy Charters',
      city: 'Kyiv',
      state: 'Zurich',
      country: 'Ukraine',
      currency: 'CAD',
      discountLevelMonthly: 2,
      discountLevelAnnually: 2
    },
    {
      selected: false,
      company: 'Masters of Code',
      city: 'Los Angeles',
      state: 'Zurich',
      country: 'New Zealand',
      currency: 'UAH',
      discountLevelMonthly: 7,
      discountLevelAnnually: 2
    },
    {
      selected: false,
      company: 'Stargazer Consultating',
      city: 'San Antonio',
      state: 'Ontario',
      country: 'UK',
      currency: 'JPY',
      discountLevelMonthly: 6,
      discountLevelAnnually: 5
    },
    {
      selected: false,
      company: 'Sword Masters',
      city: 'San Antonio',
      state: 'Zurich',
      country: 'Korea',
      currency: 'UAH',
      discountLevelMonthly: 5,
      discountLevelAnnually: 5
    },
  ];

  getCustomersData() {
    return this.customersData;
  }
}

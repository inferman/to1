export class FiltersService {
  tabsList = [
    {
      title: 'microsoft',
      url: '',
      icon: ''
    },
    {
      title: 'total one',
      url: '',
      icon: ''
    },
    {
      title: 'my products',
      url: '',
      icon: ''
    },
    {
      title: 'defaults',
      url: '',
      icon: ''
    }
  ];

  categoriesList = [
    {title: 'Office 365', url: ''},
    {title: 'Azure', url: ''},
    {title: 'Azure Reserved VM', url: ''},
    {title: 'Software subscriptions', url: ''},
    {title: 'SPLA', url: ''}
  ];

  filtersList = [
    { label: 'select month', name: 'month', type: 'text' },
    { label: 'name', name: 'name', type: 'text' },
    { label: 'language', name: 'language', type: 'text' },
    { label: 'category', name: 'category', type: 'text' },
    { label: 'subcategory', name: 'subcategory', type: 'text' },
    { label: 'select currency', name: 'currency', type: 'text' },
    { label: 'region', name: 'region', type: 'text' },
    { label: 'date', name: 'date', type: 'text' },
    { label: 'price', name: 'price', type: 'text' },
    { label: 'some', name: 'some', type: 'text' }
  ];

  getTabsList() {
    return this.tabsList;
  }

  getCategoriesList() {
    return this.categoriesList;
  }

  getFiltersList() {
    return this.filtersList;
  }
}

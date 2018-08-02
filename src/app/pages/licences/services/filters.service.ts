export class FiltersService {
  tabsList = [
    {
      title: 'microsoft',
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
    {title: 'Software subscriptions', url: ''}
  ];

  dinamicFiltersList = [
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
  ];

  staticFiltersList = [
    { label: 'select month', name: 'month', type: 'text' },
    { label: 'select currency', name: 'currency', type: 'text' },
    { label: 'language', name: 'language', type: 'text' },
    { label: 'category', name: 'category', type: 'text' },
    { label: 'subcategory', name: 'subcategory', type: 'text' },
  ];

  getData(dataType) {
    return this[dataType];
  }
}

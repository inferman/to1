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
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
    { label: 'dinamic filter', name: 'dinamic-filter', type: 'text' },
  ];


  getData(dataType) {
    return this[dataType];
  }
}

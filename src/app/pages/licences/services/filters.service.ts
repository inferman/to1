export class FiltersService {
  mainFiltersList = [
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

  secondFiltersList = [
    { title: 'Office 365', url: '' },
    { title: 'Azure', url: '' },
    { title: 'Azure Reserved VM', url: '' },
    { title: 'Software subscriptions', url: '' },
    { title: 'SPLA', url: '' }
  ];

  getFiltersList() {
    return this.mainFiltersList;
  }

  getSecondFiltersList() {
    return this.secondFiltersList;
  }
}

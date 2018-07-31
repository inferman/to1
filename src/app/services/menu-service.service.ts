import {Subject} from 'rxjs';

export class MenuService {
  private menuItems = [
    {
      title: 'Dashboard',
      iconClass: 'svg-ic-dashboard',
      link: '/dashboard',
      isSubNavActive: false,
      subNav: []
    },
    {
      title: 'Deployment & configuration',
      iconClass: 'svg-ic-deployment',
      link: null,
      isSubNavActive: false,
      subNav: [
        { title: 'test1' },
        { title: 'test2' }
      ]
    },
    {
      title: 'Organization & settings',
      iconClass: 'svg-ic-organization',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Users & permissions',
      iconClass: 'svg-ic-users',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Software & services',
      iconClass: 'svg-ic-software',
      link: '/licences',
      isSubNavActive: false,
      subNav: []
    },
    {
      title: 'Billing',
      iconClass: 'svg-billing',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Settings',
      iconClass: 'svg-ic-settings',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Logs',
      iconClass: 'svg-ic-logs',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
  ];

  isMenuActive = new Subject();

  getMenuList() {
    return this.menuItems;
  }
}

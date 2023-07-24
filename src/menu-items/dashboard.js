// assets
import { IconDashboard } from '@tabler/icons-react';
import { IconBuildingSkyscraper } from '@tabler/icons-react';


// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'forms',
      title: 'Forms',
      type: 'item',
      url: '/forms',
      icon: IconBuildingSkyscraper,
      breadcrumbs: false
    },
    {
      id: 'setting',
      title: 'Profile',
      type: 'item',
      url: '/account-setting',
      icon: IconDashboard,
      breadcrumbs: false
    },
  ]
};

export default dashboard;

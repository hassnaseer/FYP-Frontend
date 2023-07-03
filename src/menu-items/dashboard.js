// assets
import { IconDashboard } from '@tabler/icons-react';
import { IconBuildingSkyscraper } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { IconUserCheck } from '@tabler/icons-react';
import { IconUsersMinus } from '@tabler/icons-react';
import AmenitiesIcon from 'ui-component/icons/DryCleaningIcon.svg';


// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'Hotels',
      title: 'Hotels',
      type: 'item',
      url: '/hotels',
      icon: IconBuildingSkyscraper,
      breadcrumbs: false
    },
    {
      id: 'Booking',
      title: 'Booking',
      type: 'item',
      url: '/booking',
      icon: IconCalendarEvent,
      breadcrumbs: false
    },
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'Role',
      title: 'Role',
      type: 'item',
      url: '/role',
      icon: IconUserCheck,
      breadcrumbs: false
    },
    {
      id: 'Staff',
      title: 'Staff',
      type: 'item',
      url: '/staff',
      icon: IconUsersMinus,
      breadcrumbs: false
    },
    {
      id: 'Amenities',
      title: 'Amenities',
      type: 'item',
      url: '/amenities',
      icon: AmenitiesIcon,
      breadcrumbs: false
    },
  ]
};

export default dashboard;

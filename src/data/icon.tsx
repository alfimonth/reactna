import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

// svg imports
import HumidityIcon from '@/assets/icons/humidity.svg';
import VisibilityIcon from '@/assets/icons/eyes.svg';
import WindIcon from '@/assets/icons/wind.svg';
import Next from '@/assets/icons/next.svg';
import On from '@/assets/icons/on.svg';
import Off from '@/assets/icons/off.svg';
import Filter from '@/assets/icons/filter.svg';
import DropDown from '@/assets/icons/dropdown.svg';
import Add from '@/assets/icons/add.svg';
import Delete from '@/assets/icons/delete.svg';
import Edit from '@/assets/icons/edit.svg';
import Search from '@/assets/icons/search.svg';
import Back from '@/assets/icons/back.svg';
import Notif from '@/assets/icons/notifcations.svg';
import Down from '@/assets/icons/down.svg';
import Up from '@/assets/icons/up.svg';

type IconComponent = ComponentType<SvgProps>;

const icons: Record<string, IconComponent> = {
  humidity: HumidityIcon,
  visibility: VisibilityIcon,
  wind: WindIcon,
  next: Next,
  on: On,
  off: Off,
  filter: Filter,
  dropdown: DropDown,
  add: Add,
  delete: Delete,
  edit: Edit,
  search: Search,
  back: Back,
  notif: Notif,
  down: Down,
  up: Up,
};

export default icons;

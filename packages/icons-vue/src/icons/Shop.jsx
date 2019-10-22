
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShopOutlineSvg from '@ant-design/icons-svg/lib/outline/ShopOutline';

export default {
  name: 'Shop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShopOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppstoreOutlineSvg from '@ant-design/icons-svg/lib/outline/AppstoreOutline';

export default {
  name: 'Appstore',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppstoreOutlineSvg } },
      children
    ),
};

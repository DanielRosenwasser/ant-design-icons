
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadiusBottomleftOutlineSvg from '@ant-design/icons-svg/lib/outline/RadiusBottomleftOutline';

export default {
  name: 'RadiusBottomleft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusBottomleftOutlineSvg } },
      children
    ),
};

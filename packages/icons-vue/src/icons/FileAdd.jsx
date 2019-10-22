
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileAddOutlineSvg from '@ant-design/icons-svg/lib/outline/FileAddOutline';

export default {
  name: 'FileAdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileAddOutlineSvg } },
      children
    ),
};

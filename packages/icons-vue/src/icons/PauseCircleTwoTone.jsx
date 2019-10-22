
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PauseCircleTwoTone';

export default {
  name: 'PauseCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseCircleTwoToneSvg } },
      children
    ),
};

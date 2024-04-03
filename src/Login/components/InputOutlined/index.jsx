import { forwardRef } from 'react';
import { Input } from './style';

export const InputOutlined = forwardRef((props, ref) => {
  return <Input {...props} ref={ref} />;
});


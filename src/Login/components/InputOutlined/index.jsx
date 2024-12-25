import { forwardRef } from 'react';
import { Input } from './style';

export const InputOutlined = forwardRef((props, ref, style) => {
  return <Input {...props} ref={ref} className={style ? 'input-outlined-error' : 'input-outlined'}  />;
});


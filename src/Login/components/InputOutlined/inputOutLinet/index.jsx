import { InputOutlined as Input } from '../index';
import { useFormContext } from 'react-hook-form';

export const InputOutlined = ({
    name = '',
    className = '',
    rules,
    type = '',
    placeholder = '',
    ...props
}) => {
    const { register  } = useFormContext();

    return (
        <Input {...register (name, rules )} {...props} type={type} placeholder={placeholder} />
    );
};
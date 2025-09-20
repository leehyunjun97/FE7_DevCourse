import type { Dispatch, SetStateAction } from 'react';

type InputProps = React.ComponentPropsWithRef<'input'> & {
  item: string;
  setValue: Dispatch<SetStateAction<string>>;
};
export default function Input(props: InputProps) {
  const { item, setValue, ref, ...rest } = props;
  return (
    <>
      <input
        ref={ref}
        type='text'
        value={item}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
    </>
  );
}

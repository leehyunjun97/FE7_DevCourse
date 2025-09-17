import { twMerge } from 'tailwind-merge';

type CheckBoxProps = React.ComponentPropsWithoutRef<'input'>;
export default function CheckBox(props: CheckBoxProps) {
  const { children, className = '', ...rest } = props;
  return (
    <>
      <label>
        <input
          className={twMerge(
            ` w-5 h-5 align-middle accent-[#4f4f4f]`,
            className
          )}
          {...rest}
        />
        <span className='inter ml-2 relative top-0.5'>{children}</span>
      </label>
    </>
  );
}

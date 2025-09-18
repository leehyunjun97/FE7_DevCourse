// import { twMerge } from 'tailwind-merge';

type CheckBoxProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type: 'checkbox';
};
export default function CheckBox(props: CheckBoxProps) {
  const { children = 'I Agree', ...rest } = props;
  return (
    <>
      {/* <label>
        <input
          className={twMerge(
            ` w-5 h-5 align-middle accent-[#4f4f4f]`,
            className
          )}
          {...rest}
        />
        <span className='inter ml-2 relative top-0.5'>{children}</span>
      </label> */}
      <div className='flex items-center gap-2'>
        <input
          id='chk'
          className='appearance-none w-5 h-5 rounded-[5px]
          bg-[#4f4f4f] border border-[#4f4f4f] checked:bg-[url("/check.svg")]
          checked:bg-no-repeat checked:bg-center'
          {...rest}
        />
        <label htmlFor='chk'>{children}</label>
      </div>
    </>
  );
}

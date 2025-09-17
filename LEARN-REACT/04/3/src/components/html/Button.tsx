import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
export default function Button(props: ButtonProps) {
  const { children, className = '', ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          `inter w-[77px] h-[44px] rounded-lg bg-[#4f4f4f] text-[#F5F5F5] cursor-pointer`,
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

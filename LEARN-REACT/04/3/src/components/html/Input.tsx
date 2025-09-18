import { twMerge } from 'tailwind-merge';

type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
};
export default function Input(props: InputProps) {
  const { className = '', ...rest } = props;
  return (
    <>
      <input
        className={twMerge(
          `inter w-[240px] h-[44px] border border-[#4f4f4f]-600 pl-4 rounded-lg m-4 font-[550] text-[#7b7878] text-sm`,
          className
        )}
        {...rest}
      />
    </>
  );
}

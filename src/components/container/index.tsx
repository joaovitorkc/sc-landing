import { ComponentProps } from 'react';

type ContainerProps = ComponentProps<'div'>;

const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return <div className="flex flex-col w-full max-w-6xl px-6 pb-8 mx-auto" {...props} />;
};

export { Container };

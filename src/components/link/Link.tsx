import React, { FC, ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Link: FC<Props & LinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <NextLink className={className} {...props}>
      {children}
    </NextLink>
  );
};

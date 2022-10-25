import React, { FC, ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

type Props = {
  children: ReactNode;
};

export const Link: FC<Props & LinkProps> = ({ children, ...props }) => {
  return <NextLink {...props}>{children}</NextLink>;
};

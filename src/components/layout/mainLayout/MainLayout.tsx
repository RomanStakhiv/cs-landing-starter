import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Header } from '@/components/header/Header';

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.common.white,
  },
}));

type Props = {
  children: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
    </div>
  );
};

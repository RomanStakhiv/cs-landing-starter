import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Header } from '@cmp/header/Header';

const useStyles = makeStyles()(() => ({
  root: {
    height: '100vh',
    width: '100%',
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

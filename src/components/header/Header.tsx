import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { LangSwitcher } from '@src/components/langSwitcher/LangSwitcher';

const useStyles = makeStyles()((theme) => ({
  box: {
    background: theme.palette.info.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Header = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.box}>
      <LangSwitcher />
    </Box>
  );
};

import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Link } from '@/components/link/Link';

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
      <Link href="https://google.com">About us</Link>
      <Link href="https://google.com">Our goal</Link>
    </Box>
  );
};

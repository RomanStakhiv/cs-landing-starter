import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '@src/lib/getStatic';
import { Box } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { MainLayout } from '@cmp/layout/mainLayout/MainLayout';

const useStyles = makeStyles()((theme) => ({
  box: {
    position: 'relative',
    height: 'auto',

    [theme.breakpoints.up('md')]: {
      height: 'auto',
    },
  },
}));

const Home = () => {
  const { classes } = useStyles();
  const { t } = useTranslation(['common']);

  return (
    <MainLayout>
      <Box className={classes.box}>
        <img
          src="/assets/images/circle-background.png"
          alt="Picture of the author"
        />
      </Box>
      <h1>{t('More details')}</h1>
      <h1>{t('Participate')}</h1>
    </MainLayout>
  );
};

const getStaticProps = makeStaticProps(['common']);

export { getStaticPaths, getStaticProps };

export default Home;

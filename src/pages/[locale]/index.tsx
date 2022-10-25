import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import { Button, Grid } from '@mui/material';
import { Header } from '@/components/header/Header';

const Home = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Header />
    </>
  );
};

const getStaticProps = makeStaticProps(['common']);

export { getStaticPaths, getStaticProps };

export default Home;

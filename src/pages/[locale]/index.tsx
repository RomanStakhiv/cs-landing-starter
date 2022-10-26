import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '@src/lib/getStatic';
import { MainLayout } from '@src/components/layout/mainLayout/MainLayout';

const Home = () => {
  const { t } = useTranslation(['common']);

  return (
    <MainLayout>
      <h1>{t('More details')}</h1>
      <h1>{t('Participate')}</h1>
    </MainLayout>
  );
};

const getStaticProps = makeStaticProps(['common']);

export { getStaticPaths, getStaticProps };

export default Home;

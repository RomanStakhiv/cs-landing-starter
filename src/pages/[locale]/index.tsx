import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import { MainLayout } from '@/components/layout/mainLayout/MainLayout';

const Home = () => {
  const { t } = useTranslation(['common']);

  return (
    <MainLayout>
      <h1>{t('common.More details')}</h1>
      <h1>{t('common.Participate')}</h1>
    </MainLayout>
  );
};

const getStaticProps = makeStaticProps(['common']);

export { getStaticPaths, getStaticProps };

export default Home;

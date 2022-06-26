import type { NextPage } from 'next';
import Head from 'next/head';
import CardPayment from '../components/pages/home/CardPayment';
import useStyles from '../components/pages/home/CardPayment.styles';

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Payment service</title>
      </Head>
      <div className="container">
        <CardPayment />
      </div>
    </>
  );
};

export default Home;

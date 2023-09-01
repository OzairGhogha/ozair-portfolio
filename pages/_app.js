import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Head from "next/head";


// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

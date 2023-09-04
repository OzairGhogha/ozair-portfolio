import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';


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
          <title>Ozair Ghogha - Portfolio</title>
          <meta name="author" content="Ozair Ghogha"/>
          <meta name="description" content="Ozair Ghogha is a cloud engineer who helps clients with their technology needs. He has a strong background in computer science and a passion for learning new skills. He has worked on various projects that you can see on his website."/>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
          </Head>
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

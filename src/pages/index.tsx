import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>GraphiQL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Needs to be changed to custom one */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1>Welcome</h1>
          <Link href="/auth/auth">Sign In / Sign Up</Link>
          <Link href="/main/main">Main</Link>
        </main>
      </Layout>
    </>
  );
}

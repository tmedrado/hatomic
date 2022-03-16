import Head from 'next/head';
import NavBar from './NavBar';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <NavBar />
        {children}
      </div>
    </>
  );
}
export default Layout;

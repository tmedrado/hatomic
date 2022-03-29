import Head from 'next/head'
import NavBar from './NavBar'

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>
      <NavBar />
      {children}
    </div>
  </>
)
export default Layout

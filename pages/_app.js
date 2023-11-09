import Layout from '../components/layout/layout'
import './styles.scss';
import { ToastContainer } from 'react-toastify';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}
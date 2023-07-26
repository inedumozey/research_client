import '../styles/globals.css'
import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }) {

  return (
    <div className='bg-color-white min-h-[100vh]'>
      <div className='max-w-[1700px] m-auto'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  )
}

export default MyApp

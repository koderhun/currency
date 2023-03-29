import Head from 'next/head'
import {CurrencyForm} from 'components/CurrencyForm/CurrencyForm'

export const Home = () => {
  return (
    <div className='general'>
      <Head>
        <title>Converter</title>
        <meta property='og:title' content='Converter' key='title' />
      </Head>
      <h1 className='title'>Converter</h1>
      <CurrencyForm />
    </div>
  )
}

export default Home

import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='theme-color' content='#1677ff' />
          <link rel='icon' href='./favicon.svg'></link>
          <link rel='apple-touch-icon' sizes='512x512' href='./favicon.svg' />
          <meta
            name='keywords'
            content='Currency, converter, pwa, rub, usd, eur, gel'
          />
          <meta
            name='description'
            content='Currency converter created for educational purposes and for personal use.
    You can install the app on your phone. A shortcut shortcut will appear.'
          />
          <link
            rel='manifest'
            href='./manifest.json'
            crossorigin='use-credentials'
          />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

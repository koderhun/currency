export const metatext = {
  title: 'Currency Converter',
}

export const metadata = {
  title: metatext.title,
  description: 'Создано в учебных целях',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'nextjs14', 'next14', 'pwa', 'next-pwa'],
  themeColor: [{media: '(prefers-color-scheme: dark)', color: '#fff'}],
  authors: [
    {name: 'Koderhun'},
    {
      name: 'Koderhun',
      url: 'https://www.github.com/koderhun/',
    },
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    {rel: 'apple-touch-icon', url: 'icons/logo.svg'},
    {rel: 'icon', url: 'icons/logo.svg'},
  ],
  logoTitle: metatext.title,
}

export const Metadata = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>{metadata.title}</title>
      <link rel="icon" href="favicon.svg" type="image/svg" />
      <meta name="description" content={metadata.description} />
      <meta name="generator" content={metadata.generator} />
      <link rel="manifest" href={metadata.manifest} />
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      {metadata.themeColor.map(({media, color}, index) => (
        <meta key={index} name="theme-color" media={media} content={color} />
      ))}
      {metadata.authors.map(({name, url}, index) => (
        <meta
          key={index}
          name="author"
          content={name}
          {...(url && {href: url})}
        />
      ))}
      <meta name="viewport" content={metadata.viewport} />
      {metadata.icons.map(({rel, url}, index) => (
        <link key={index} rel={rel} href={url} />
      ))}
    </>
  )
}

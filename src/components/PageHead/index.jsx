import React from 'react'
import isEmpty from 'lodash/isEmpty'
import Head from 'next/head'

const PageHead = ({
  title = 'Graph Data | Home',
  description = 'Evalua tu Compañía fácil y sencillo en pocos pasos',
  keywords,
  pageType = 'website',
}) => (
  <Head>
    <meta charSet="UTF-8" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    {/* <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-XXXX`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-XXXX', { 'hit_timestamp': new Date().toISOString() });`,
      }}
    /> */}

    <meta property="og:type" content={pageType} />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary" />
    {title && (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
      </>
    )}
    {description && (
      <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
      </>
    )}
    {keywords && !isEmpty(keywords) && (
      <>
        <meta name="keywords" content={keywords.join(', ')}></meta>
      </>
    )}
  </Head>
)

export default PageHead

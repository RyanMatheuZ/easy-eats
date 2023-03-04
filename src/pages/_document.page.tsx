import {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

const Document = () => {
  const author = 'Ryan M. de Oliveira';

  return (
    <Html
      lang='pt-br'
      translate='no'
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="author" content={author} />
        <meta name="generator" content="Visual Studio Code" />

        <meta property="og:author" content={author} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
      </Head>
      <body>
        <main>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

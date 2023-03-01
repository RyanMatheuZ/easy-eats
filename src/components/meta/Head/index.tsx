import type { FC } from 'react';

import { useRouter } from 'next/router';

import HeadContainer from 'next/head';

interface HeadProps {
  title: string;
  description: string;
}

const Head: FC<HeadProps> = ({
  title = 'Carregando...',
  description
}) => {
  const { asPath } = useRouter();

  const formattedTitle = `${title} | EasyEats`;

  const baseUrl = 'https://easy-eats-br.vercel/app';
  const formattedUrl = `${baseUrl}${asPath}`;

  return (
    <HeadContainer>
      {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="subject" content="" />
      <meta name="url" content={formattedUrl} />
      <meta name="theme-color" content="" />

      <meta property="og:title" content={formattedTitle} />
      <meta property="og:url" content={formattedUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="" />

      <link rel="canonical" href="" />

      <title>{formattedTitle}</title>
    </HeadContainer>
  );
};

export default Head;

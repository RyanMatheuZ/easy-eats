import type { FC } from 'react';

import HeadContainer from 'next/head';

interface HeadProps {
  title: string;
  description: string;
}

const Head: FC<HeadProps> = ({
  title = 'Carregando...',
  description
}) => {
  const formattedTitle = `${title} | EasyEats`;

  return (
    <HeadContainer>
      {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="subject" content="" />
      <meta name="url" content="" />
      <meta name="theme-color" content="" />

      <meta property="og:title" content={formattedTitle} />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="" />

      <link rel="canonical" href="" />

      <title>{formattedTitle}</title>
    </HeadContainer>
  );
};

export default Head;

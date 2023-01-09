import type { FC } from 'react';

import HeadContainer from 'next/head';

interface HeadProps {
  title: string;
  description: string;
}

const Head: FC<HeadProps> = ({ title, description }) => {
  return (
    <HeadContainer>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="subject" content="" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="url" content="" />
      <meta name="author" content="" />
      <meta name="generator" content="Visual Studio Code" />
      <meta name="theme-color" content="" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="" />
      <meta property="og:author" content="" />

      <link rel="canonical" href="" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />

      <title>{title}</title>
    </HeadContainer>
  );
};

export default Head;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({
  title = '',
  description,
  name = 'Vardan Zohrabyan',
  type = 'article',
  canonical = ''
}) => {
  return (
    <Helmet>
      <title>Ա. ՍԵԲԱՍՏԱՑՈՒ ԱՆՎԱՆ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ ԿՐԹԱԿԱՆ ՀԻՄՆԱԴՐԱՄ {title}</title>
      <meta name="description" content={`${description}`} />
      <link rel="canonical" href={`https://www.sebastatsi.am/${canonical}`} />
      <meta
        name="keywords"
        content="Sebastatsi college, Medical college in Abovyan, college, medical, Abovyan, Yerevan"
      />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;

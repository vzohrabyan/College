import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({
  title = '',
  description,
  name = 'Vardan Zohrabyan',
  type = 'article',
  canonical = ''
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: 'Ա. ՍԵԲԱՍՏԱՑՈՒ ԱՆՎԱՆ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ',
    alternateName: 'Medical College after A. Sebastatsi',
    description: `${description}`,
    url: 'https://www.sebastatsi.am/',
    logo: 'https://www.sebastatsi.am/logo.png',
    sameAs: [
      'https://www.facebook.com/people/%D4%B1-%D5%8D%D5%A5%D5%A2%D5%A1%D5%BD%D5%BF%D5%A1%D6%81%D5%B8%D6%82-%D6%84%D5%B8%D5%AC%D5%A5%D5%BB/pfbid02eAaNr9TSA28Da73seKo82KSn6D4dMK5sxKqT4yGDnobRimuFPbzySX2TXiAwuwq6l/?mibextid=LQQJ4d',
      'https://www.instagram.com/a.sebastatsi/?igsh=eml5NGRlN25lcHdo'
    ],
    openingHours: 'Mo-Fr 09:00-18:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ogostosi 23 1/14/4',
      addressLocality: 'Abovyan',
      addressRegion: 'Kotayk',
      postalCode: '2204',
      addressCountry: 'AM'
    },
    foundingDate: '2010',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+374 98 127317',
      contactType: 'Customer Service',
      availableLanguage: ['Armenian', 'English']
    }
  };

  return (
    <Helmet>
      <title>Ա. ՍԵԲԱՍՏԱՑՈՒ ԱՆՎԱՆ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ ԿՐԹԱԿԱՆ ՀԻՄՆԱԴՐԱՄ {title}</title>
      <meta name="description" content={description} />
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
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default Seo;

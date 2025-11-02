import Head from 'next/head'

export default function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  twitterCard = 'summary_large_image',
  date,
  keywords
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  const fullUrl = url ? (url.startsWith('http') ? url : `${siteUrl.replace(/\/$/, '')}${url.startsWith('/') ? '' : '/'}${url}`) : siteUrl
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl.replace(/\/$/, '')}${image.startsWith('/') ? '' : '/'}${image}`) : `${siteUrl.replace(/\/$/, '')}/images/og-image.svg`

  const metaTitle = title ? `${title} | Vijay A. Raju` : 'Vijay A. Raju'
  const metaDescription = description || 'Expert guidance in leadership and AI-driven growth'

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}

      <link rel="canonical" href={fullUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {date && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: metaDescription,
            url: fullUrl,
            datePublished: date
          })}
        </script>
      )}
    </Head>
  )
}

import React from "react"
import Helmet from "react-helmet"
import urljoin from "url-join"
import { siteMetaData } from "../sitemeta"

function SEO({ postNode, postPath, postSEO, productSEO }) {
  const { nodeSeo, allSite, nodeAboutPage } = siteMetaData()
  const karaenaPhoto =
    nodeAboutPage.relationships.field_photo.localFile.childImageSharp.fluid.src
  const presentationHeight =
    nodeAboutPage.relationships.field_photo.localFile.childImageSharp.fluid
      .presentationHeight
  const presentationWidth =
    nodeAboutPage.relationships.field_photo.localFile.childImageSharp.fluid
      .presentationWidth
  const config = nodeSeo.field_metadata
  const { siteUrl, pathPrefix, siteLogo, siteFBAppID, userTwitter } = allSite.nodes[0].siteMetadata
  let title
  let description
  let image
  let postURL
  if (postSEO) {
    const postMeta = postNode.frontmatter
    ;({ title } = postMeta)
    description = postMeta.description ? postMeta.description : postNode.excerpt
    image = postMeta.cover
    postURL = urljoin(siteUrl, pathPrefix, postPath)
  } else {
    title = config.title
    description = config.description
    image = siteLogo
  }


  const blogURL = urljoin(siteUrl, "")
  let schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Karaena Vincent",
          familyName: "Vincent",
          givenName: "Karaena",
          sameAs: "https://facebook.com/karaenavincentphotography",
          url: siteUrl,
          telephone: "+6421796055",
          email: "info@karaenavincent.com",
          description: "Professional Photographer",
          gender: "female",
          jobTitle: "Owner",
          address: {
            "@type": "PostalAddress",
            streetAddress: "39 Green Lane",
            addressLocality: "Motueka",
            addressRegion: "Nelson Tasman",
            postalCode: "7120",
            addressCountry: "New Zealand",
          },
          image: {
            "@type": "ImageObject",
            url: "https://karaenavincent.co.nz" + karaenaPhoto,
            width: presentationWidth,
            height: presentationHeight,
          },
          affiliation: {
            "@type": "Organization",
            "@id": "BNI",
            name: "Business Network International",
            url: "http://bni.co.nz",
            sameAs: "http://www.bni.com/",
            logo: {
              "@type": "ImageObject",
              url:
                "https://www.bniconnectglobal.com/bnicms/assets/country/images/header-white.png",
              width: "900",
              height: "110",
            },
          },
        },
        {
          "@type": "ProfessionalService",
          additionalType: "LocalBusiness",
          "@id": "karaenavincentphotography",
          sameAs: "https://facebook.com/karaenavincentphotography",
          name: "Karaena Vincent Photography",
          url: "https://karaenavincent.co.nz/",
          telephone: "006421796055",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+64-21-796-055",
            availableLanguage: "English",
            contactType: "customer service",
            email: "info@karaenavincent.com",
            productSupported:
              "Photography, Personal Branding, Business Branding",
          },
          image: {
            "@type": "ImageObject",
            representativeOfPage: "True",
            url: "https://karaenavincent.co.nz" + karaenaPhoto,
            width: presentationWidth,
            height: presentationHeight,
          },
          logo: {
            "@type": "ImageObject",
            representativeOfPage: "True",
            url: "https://karaenavincent.co.nz/icons/icon-512x512.png",
            width: "512",
            height: "512",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "39 green lane",
            addressLocality: "Motueka",
            addressRegion: "Nelson Tasman",
            postalCode: "7120",
            addressCountry: "New Zealand",
          },
          brand: {
            "@type": "Brand",
            "@id": "karaenavincent.com",
            name: "Karaena Vincent Photography",
            description:
              "Professional Photography and Brand Photography, Services",
            url: "https://karaenavincent.co.nz/",
          },
        },
      ],
    },
  ]

  if (productSEO) {
    schemaOrgJSONLD = productSEO
  }

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
      }
    )
  }
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={siteFBAppID ? siteFBAppID : ""}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={userTwitter ? userTwitter : ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, image, lang  }) {
  const { pathname } = useLocation()
  //console.log('■pathnameは', pathname) //ドクターのみなさまへページの場合、"■pathnameは /doctors-article/1"


  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            defaultLang: lang
            twitterUsername
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultLang,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: staticOrDynamic(siteUrl + image), // 動的ページの場合siteUrl + imageで'https://benzoinfojapan.orghttps://images.microcms-assets.io/protected/ap-northeast-1:4fa35fa7-a818-40f5-b6bb-89f712b0dee1/service/benzoinfo/media/NicolL.png'となってしまう
    lang: lang || defaultLang,
    url: `${siteUrl}${pathname}`
  }

  function staticOrDynamic(imgPath) {
    const str = imgPath
    let array = str.split(/https:\/\//);
      //console.log('◆strは'+ str + '◆str.lengthは'+ str.length)
      //console.log('■arrayは', array)
      //console.log('■最終形 ' + 'https://' + array[2])
    return str.length <= 100
      ? str
      : 'https://' + array[2]
  }

  //console.log('■siteUrlは', {siteUrl}) // ■siteUrlは {siteUrl: "https://benzoinfojapan.org"}
  //console.log('■urlは', `${siteUrl}${pathname}`) // ■urlは https://benzoinfojapan.org/doctors-article/1/

  return (
    <Helmet>
      <title>{seo.title}</title>
      <html lang={seo.lang} />
      <template>{titleTemplate}</template>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,  
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: null,
}

export default SEO

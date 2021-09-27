import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import { useStaticQuery, graphql } from "gatsby"
import Video from "../components/video"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          experience {
            role
            when
            company
            where
            moreInfo
          }
        }
      }
    }
  `)
  const experience = data.site.siteMetadata.experience.map((item, index) => (
    <Item
      key={index}
      name={item.role}
      when={item.when}
      where={item.where}
      org={item.company}
      moreInfo={item.moreInfo}
    />
  ))

  return (
    <Layout
      pageTitle="Experience"
      pageDescription="Learn more about my experience"
    >
      {experience}
      <Video videoSrcURL={"https://www.youtube.com/embed/O2x_DU9-14E?start=45&end=71"} videoTitle={'test'}/>
    </Layout>
  )
}

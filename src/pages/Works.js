import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          education {
            degree
            major
            when
            school
            where
            publications
            title
            moreinfo
          }

        }
      }
    }
  `)

  const work = data.site.siteMetadata.education.map((item, index) => (
    <Item
      key={index}
      name={(item.degree || "") + " " + (item.major ? "in " + item.major : "")}
      when={item.when}
      where={item.where}
      org={item.school}
      moreInfo={
        item.title
        +(item.degree=='Ph.D.' ? "<img src="+thesis_img+" width=\"500\" height=\"300\"/>" : "")
        +item.moreinfo
        +(item.publications|| "")
      }
    />
  ))

  return (
    <Layout
      pageTitle="Works"
      pageDescription="Work Samples"
    >
      {education}


      
    </Layout>
  )
}

//doctor title line
//doctor image
//doctor descript


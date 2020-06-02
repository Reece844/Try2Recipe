import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Post from '~/components/Post';
import Img from "gatsby-image"


const PostTemplate = props => (
  <Layout {...props}>
    <Post {...props} />
  </Layout>
);

export default PostTemplate;

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    post: markdownRemark (frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        category
        tags
        author
        date
        ingredients
        components {
          rootId
          fileName
        }
        image {
          childImageSharp {
            fluid(quality:100, maxWidth: 500, maxHeight:500) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }          
        }
      }
    }
  }
`;

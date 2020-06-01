import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import TaggedList from '~/components/TaggedList';

const TaggedListTemplate = props => (
  <Layout {...props}>
    <TaggedList {...props} />
  </Layout>
);

export default TaggedListTemplate;

export const pageQuery = graphql`
  query TaggedListQuery {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    posts: allMarkdownRemark (
      filter: { frontmatter: { hide: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            image {
              publicURL
              childImageSharp {
                fluid(quality:100, maxWidth: 400, maxHeight:400) {
                  ...GatsbyImageSharpFluid
                }
              }          
            }
            path
            tags
            date
            summary
          }
        }
      }
    }
  }
`;

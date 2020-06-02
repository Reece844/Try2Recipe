import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { POST, PORTFOLIO } from '~/constants';
import App from '~/components/App';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Kaushan Script'; 

  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Kaushan Script'; 
  }
`;


const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query GatsbyQuery {
        posts: allMarkdownRemark(
          filter: { frontmatter: { hide: { ne: true } } }
        ){
          edges {
            node {
              frontmatter {
                path
                type
                title
                category
                summary
                author
                tags
                image {
                  publicURL
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }          
                }
              }
            }
          }
        }
      }
    `}
    render={({ posts }) => {
      <GlobalStyle />
      const { edges } = posts;
      const portfolios = edges.filter(({ node: { frontmatter: { type } } }) => type === PORTFOLIO);
      const categories = edges.reduce((categories, { node }) => {
        const { category } = node.frontmatter;

        if (category === null) {
          return categories;
        }

        const [{ length: total }] = categories;
        const categoryIndex = categories.findIndex(({ key }) => key === category);

        if (categoryIndex === -1) {
          return [
            { key: '__ALL__', length: total + 1 },
            ...categories.slice(1),
            { key: category, length: 1 },
          ];
        }

        return [
          { key: '__ALL__', length: total + 1 },
          ...categories.slice(1, categoryIndex - 1),
          { key: category, length: categories[categoryIndex].length + 1 },
          ...categories.slice(categoryIndex + 1),
        ];
      }, [{ key: '__ALL__', length: 0 }]);
      const postInformations = edges.reduce((postInformations, { node: { frontmatter } }) => {
        const { type, path, title, summary, tags = [], category } = frontmatter;

        if (type === POST || type === null) {
          return [
            ...postInformations,
            {
              path,
              title,
              summary,
              tags,
              category,
            },
          ];
        }

        return postInformations;
      }, []);

      const hasPortfolio = portfolios.length > 0;

      const childrenWithProps = Children.map(children, child => cloneElement(child, { portfolios }));

      return (
        <App
          location={location}
          categories={categories}
          postInformations={postInformations}
          hasPortfolio={hasPortfolio}
        >
          {childrenWithProps}
        </App>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default Layout;

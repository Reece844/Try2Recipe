import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import { Wrapper, PortfolioDescription, PortfolioImages } from './styled';
import Img from "gatsby-image";

const Portfolio = ({ data: { portfolio: { frontmatter: { title, image }, html } } }) => (
  <Wrapper>
    <Helmet>
      <title>
        {`${PREFIX}${title.toUpperCase()}`}
      </title>
      <meta name="og:title" content={`${PREFIX}${title.toUpperCase()}`} />
    </Helmet>

    <PortfolioDescription>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </PortfolioDescription>
    <PortfolioImages>  
          <Img
            fluid={image.childImageSharp.fluid}
            alt={title}
            width="270px"
            height="400px"
          />
    </PortfolioImages>
  </Wrapper>
);

Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Portfolio;

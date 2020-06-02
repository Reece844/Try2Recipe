import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import PortfolioCard from '~/components/Common/PortfolioCard';
import { PREFIX } from '~/constants';
import { Wrapper } from './styled';
import Img from "gatsby-image";

const Portfolios = ({ data: { portfolios: { edges: portfolios } } }) => (
  <Wrapper>
    <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
      <title>
        {`${PREFIX}PORTFOLIOS`}
      </title>
      <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
    </Helmet>
    {portfolios.map(({ node: { frontmatter: { path, title, image} } }) => {

      if (image !== null) {
        return (
          <PortfolioCard key={path}>
            <Link to={path}>
              
                <Img fluid={image.childImageSharp.fluid} alt="portfolio" />
              
              <h6>
                {title}
              </h6>
            </Link>
          </PortfolioCard>
        );
      }

      return (
        <PortfolioCard key={path}>
          <Link to={path}>
            <h4>
              {title}
            </h4>
          </Link>
        </PortfolioCard>
      );
    })}
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;

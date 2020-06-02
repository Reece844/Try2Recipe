import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';
import { TITLE } from '~/constants';
import { Title } from './styled';
import Img from "gatsby-image"

const Home = ({ portfolios }) => (
  <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
      <title>
        {TITLE}
      </title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <Wrapper isHome>
      <Title>
        Bapa's Kitchen
      </Title>
    </Wrapper>
    {portfolios.length >= 4 ? (
      <SimpleWrapper>
        {portfolios
          .slice(0, 4)
          .map(({ node: { frontmatter: { path, title} }, node: { frontmatter: {image:{childImageSharp:{fluid}}} }}) => {
            let test = fluid;
            return (
              <PortfolioCard key={path}> 
                <Link to={`/tags/${title}/1`}>
                <Img fluid={test} />
                  <h6>
                    {title}
                  </h6>
                </Link>
              </PortfolioCard>
            );
          })}
      </SimpleWrapper>
    ) : null}
  </>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;

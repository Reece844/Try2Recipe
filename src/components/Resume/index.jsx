import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FaPrint, FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Clearfix from '~/components/Common/Clearfix';
import { PREFIX, AUTHOR, EMAIL, GITHUB_ID, TWITTER_ID, FACEBOOK_ID, LINKEDIN_ID } from '~/constants';
import { Wrapper, BasicInformation, SocialInformation, MDInformation, Button } from './styled';
import Img from "gatsby-image";


const Resume = ({
  data: {
    resume: {
      html,
    },
    dad: {
      childImageSharp: {
        fluid
      }
    },
  },
}) => {
  const $mdWrapper = useRef(null);

  useEffect(() => {
    const anchors = [...new Set($mdWrapper.current.getElementsByTagName('a'))];

    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');

      if (href.startsWith('http')) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer noopener');
      }
    });
  }, []);

  return (
    <Wrapper>
      <Clearfix>
        <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
          <title>
            {`${PREFIX}RESUME`}
          </title>
          <meta name="og:title" content={`${PREFIX}RESUME`} />
        </Helmet>
        <BasicInformation>
        <Img fluid={fluid} />
          <h1>
            {AUTHOR}
          </h1>
          <p>
            {EMAIL}
          </p>
        </BasicInformation>
        <MDInformation>
          <div
            ref={$mdWrapper}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </MDInformation>
      </Clearfix>
    </Wrapper>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Resume;

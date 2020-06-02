import React, { useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { FaTags } from 'react-icons/fa';
import Clipboard from 'clipboard';
import Bio from '~/components/Bio';
import PostWrapper from '~/components/Common/PostWrapper';
import { PREFIX, SITE_URL, DISQUS_ID } from '~/constants';
import { Tags, PostContent, ImageWrapper, ComponentInPost,IngContent, PTitle, TestInPost } from './styled';
import Img from "gatsby-image"


const PostTemplate = ({
  data: {
    post: {
      html,
      frontmatter: {
        title,
        tags = [],
        ingredients = [],
        image: {
          childImageSharp: {
            fluid
          }
        },
        components = [],
      },
    },
  },
  location,
}) => {
  const createCopyButton = useCallback(() => {
    const codes = global.document.querySelectorAll('#post-contents .gatsby-highlight');

    codes.forEach((code) => {
      const button = document.createElement('button');
      button.setAttribute('class', 'copy-button');
      button.innerHTML = 'COPY';

      code.appendChild(button);
    });

    const clipboard = new Clipboard('.copy-button', {
      target: ({ previousElementSibling }) => previousElementSibling,
    });

    clipboard.on('success', (e) => {
      e.clearSelection();
    });
  }, []);

  const renderComponents = useCallback((components) => {
    if (Array.isArray(components)) {
      try {
        components.forEach(({ rootId: componentRootId, fileName: componentFileName }) => {
          const $componentContainer = global.document.getElementById(componentRootId);
          const App = require(`~/postComponents/${componentFileName}`).default;

          render(
            <ComponentInPost>
              <App />
            </ComponentInPost>,
            $componentContainer
          );
        });
      } catch (e) {
        console.warn(e); // eslint-disable-line no-console
      }
    }
  }, []);

  const imt = fluid;

  return (
    <PostWrapper>
      <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
        <title>
          {`${PREFIX}${title}`}
        </title>
        <meta name="og:title" content={`${PREFIX}${title}`} />
      </Helmet>
      <PTitle>
        {title}
      </PTitle>
      <ImageWrapper><Img fluid={imt} /></ImageWrapper>  
      {tags.length === 0 ? null : (
        <Tags>
          <FaTags />
          {tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${tag}/1`}
            >
              <small>
                {tag},
              </small>
            </Link>
          ))}
        </Tags>
      )}          
      <Bio />

      <IngContent>
      <fieldset>
        <legend>Ingredients</legend>
        <ul>
        {ingredients.map(ingredient => (
            <li>{ingredient}</li>
          ))}
          </ul>
        </fieldset>
      </IngContent>
      <PostContent>
      <fieldset>
        <legend>Directions</legend>
        <h2><div id="post-contents" dangerouslySetInnerHTML={{ __html: html }} /></h2>
        </fieldset>
      </PostContent>
    </PostWrapper>
    
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default PostTemplate;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Truncate from 'react-truncate';
import { FaTags } from 'react-icons/fa';
import { ImageWrapper, TagWrapper, StyledArticle } from './styled';
import Img from "gatsby-image"

const Card = ({
  tags,
  path,
  image: {
    childImageSharp: {
      fluid
    }
  },
  title,
  summary,
}) => {
  const image = fluid;
  return (
    <StyledArticle>
      <div>
        <Link to={path}>
        {image === null ? null : (
          <Img
            fluid={image}
          />
      )}
          <h3>
            <Truncate
              lines={2}
              ellipsis={(
                <span>
                  ...
                </span>
              )}
            >
              {title}
            </Truncate>
          </h3>
          <p>
            <Truncate
              lines={3}
              ellipsis={(
                <span>
                  ...
                </span>
              )}
            >
              {summary}
            </Truncate>
          </p>
        </Link>
        <TagWrapper>
          <FaTags />
          {tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${tag}/1`}
            >
              <small>
                {tag}
              </small>
            </Link>
          ))}
        </TagWrapper>
      </div>
    </StyledArticle>
  );
};

Card.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
};

Card.defaultProps = {
  tags: [],
  image: '',
  title: '',
  summary: '',
};

export default Card;

import React from 'react';
import { SITE_URL, PROFILE } from '~/constants';
import { Wrapper } from './styled';
import PropTypes from 'prop-types';


const Bio = ({auth,}) => (
  <Wrapper>
    
    <a
      href={SITE_URL}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>
        by {auth}
        <br />
      </span>
    </a>
  </Wrapper>
);

Bio.propTypes = {
  author: PropTypes.string,
};

export default Bio;

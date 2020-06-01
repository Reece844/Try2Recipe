import React from 'react';
import { AUTHOR, SITE_URL, PROFILE } from '~/constants';
import { Wrapper } from './styled';

const Bio = () => (
  <Wrapper>
    
    <a
      href={SITE_URL}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>
        by {AUTHOR}
        <br />
      </span>
    </a>
  </Wrapper>
);

export default Bio;

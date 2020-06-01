import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 1em 0 20px 0;
  padding: 0 0 20px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #bdb9ba;

  a {
    color: #000;
  }
  font-weight: 700;
  span,
  img {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    margin: 0 4px 0 0;
    border-radius: 50%;
  }

  small {
    color: #999;
    font-size: 90%;
  }
`;

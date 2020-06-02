import styled from 'styled-components';

export const ImageWrapper = styled.div`

    margin: 0 0 16px;
    padding: 0 0 16px;
    border-bottom: 1px solid #eee;
    width: 100%;

`;

export const TagWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 414px) {
    margin: 0 0 16px;
    padding: 0 0 16px;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
`;

export const StyledArticle = styled.article`
  display: inline-block;
  word-wrap: break-word;
  padding: 10px 10px 16px;
  float:left;
  font-size: 14px;
  vertical-align: top;
  width: 25%;

  @media (max-width: 700px) {
    margin-left:20%;
    width: 60%;
  }

  & > div {
    position:relative;
    top: 0;
    padding: 14px;
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    border-radius: 6px;
    border: 1px solid #e5e5e5;

    &:hover {
      top: -8px;
    }
  }

  a {
    color: ${({ theme: { color } }) => color};

    &:hover {
      h3,
      p,
      small {
      }
    }
  }

  h3 {
    padding: 8px 0 6px;
    font-family: 'Kaushan Script'; 
    height: 2.4em;
    text-align:center;
    line-height: 1.2em;
    font-size: 30px;
    font-weight: 700;
  }

  time {
    display: block;
    margin: 10px 0 0;
    font-size: 12px;
  }

  p {
    padding: 10px 0px 16px;
    margin-top: 13px;
    height: 106px;
    line-height: 1.4em;
    font-size: 14px;
    font-weight: 545;
    font-family:"sans-serif";

    border-color: #bdb9ba;
    border-top-width: 1px;
    border-top-style: solid;

    word-wrap: break-word;
    span {
      white-space: nowrap;
    }
  }

  small {
    margin: 0 0 0 4px;
    font-size: 14px;
  }
`;

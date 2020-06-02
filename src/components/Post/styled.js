import styled from 'styled-components';

export const Tags = styled.div`
  margin: 1em 0;
  border-color: #bdb9ba;
  border-top-width: 1px;
  border-top-style: solid;
padding-top:15px;
  a {
    margin: 0 0 0 4px;
    color: #000;
    text-decoration: blink;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PTitle = styled.section`
  margin: .67em 0;
  font-size: 50px;
  font-family: 'Kaushan Script';
  font-weight: 700;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-color: #d43226;
  padding: 0 0 10px 0;
  text-align:center;
`;


export const IngContent = styled.section`

    padding: 0 0 20px 36px;

  width: 35%;
  text-align: left;
  position: relative;
  float:left;
    left: 0%;
  line-height: 1.6em;
  font-family:"sans-serif";
  font-weight:600;

  ul {
    padding: 0 0 10px 20px;
    font-size: 16px;
    font-weight:565;
  }

  h4 {
    margin-top:-20px;
    padding: 0 0 20px 0px;
    margin-right:65px;
    margin-left: 8px;
    background:white;
    font-size: 28px;
    color: #d43226;
    font-weight: 700;

  }

  fieldset{
    border: 2px solid #2e2d2d
  }
  legend {
    padding: 0.2em 0.3em;
    margin-left: 0.2em;
    font-size:28px;
    text-align:left;
    position: relative;
    color: #d43226;
    font-weight: 700;
  }
  legend:before {
    position: absolute;
    content: '';
    height: 8px;

    left: 0px;
    top: 7px;
  }
  legend:after {
    position: absolute;
    content: '';
    height: 8px;
    right: 0px;
    top: 7px;
  }

  font-size: 20px;

  
`;
export const PostContent = styled.fieldset`
  line-height: 1.6em;
  right: 0%;
  width: 65%;
  font-family:"sans-serif";
  font-weight:600;
  float:right;

  text-align: left;
  position: relative;
  margin-bottom:100px;
  padding: 0 0 20px 36px;

  

  h2 {
    padding: 0 5px 20px 20px;
    
    font-size: 16px;
    font-weight:565;
  }

  h3 {
    margin: 24px 0 10px;
    font-size: 24px;
  }

  h4 {

    font-size: 28px;
    color: #d43226;
    font-weight: 700;
    padding-bottom:.5em;

    margin-top:-15px;
    padding-left: 10px;
    padding-right:10px;
    margin-left: 0px;

  }

  h4.test {
    background:white;
    width:auto;
  }

  fieldset{
    border: 2px solid #2e2d2d
  }
  legend {
    padding: 0.2em 0.3em;
    margin-left: 0.2em;
    font-size:28px;
    text-align:left;
    position: relative;
    color: #d43226;
    font-weight: 700;
  }
  legend:before {
    position: absolute;
    content: '';
    height: 8px;

    left: 0px;
    top: 7px;
  }
  legend:after {
    position: absolute;
    content: '';
    height: 8px;
    right: 0px;
    top: 7px;
  }
  p {
    margin: 16px 0 0;
    font-size: 16px;
  }

  blockquote {
    margin: 40px 0 0;
    padding: 0 0 0 2em;
    line-height: 1.2em;
    color: #aaa;
    font-style: italic;
    font-family: 'Kaushan Script';
    font-size: 24px;
  }

  pre {
    margin: 20px 0 0;
  }
`;

export const ImageWrapper = styled.figure`
  position: relative;
  width: 50%;
  overflow: hidden;
    display:block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  
`;

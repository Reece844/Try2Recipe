import styled from 'styled-components';

const PortfolioCard = styled.section`
  display: inline-block;
  position: relative;
  float: left;
  padding: 28.125% 0 0;
  width: 50%;
  height: 0;
  background-color: #eee;
  overflow: hidden;
  @media (max-width: 414px) {
    padding: 56.25% 0 0;
    width: 100%;
  }

  &:nth-child(4n + 2),
  &:nth-child(4n + 3) {
    background-color: #fff;
  }

  &:hover {
    img {
      width: 110%;
    }

    h4 {
      font-size: 2.2vw;
    }
  }

  a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #000;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: auto;
    transition: all .4s ease 0s;
  }

  h6 {
    @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
    font-family: 'Kaushan Script';  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: white;
    text-shadow:
    1.5px 1.5px 0 #000,
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }

  h4 {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 80%;
    height: 2em;
    line-height: 2em;
    font-size: 2vw;
    text-align: center;
    transition: all .4s ease 0s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default PortfolioCard;

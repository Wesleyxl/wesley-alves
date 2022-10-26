import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 15px;
`;

const Intro = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1340px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const TextArea = styled.div`
  h1 {
    font-size: 40px;
    position: relative;

    img {
      height: 70px;
    }

    span {
      font-size: 16px;
      position: absolute;
      top: 0px;
      left: -50px;
    }
  }

  h3 {
    margin-top: 10px;
    max-width: 600px;
    font-size: 20px;
  }

  p {
    max-width: 400px;
    margin-top: 10px;
    opacity: 0.7;
    text-align: justify;
  }

  @media (max-width: 1340px) {
    text-align: center;

    h1 span {
      display: none;
    }
  }

  @media (max-width: 770px) {
    h1 {
      font-size: 24px;
      position: relative;

      img {
        height: 40px;
      }
    }

    h3 {
      margin-top: 20px;
      font-size: 20px;
    }

    p {
      margin-top: 25px;
      opacity: 0.7;
      text-align: justify;
    }
  }
`;

const ImageArea = styled.div`
  .lotties-content {
    width: 600px;
    height: 500px;

    @media (max-width: 1340px) {
      margin-top: -60px;
      width: 500px;
      height: 400px;
    }

    @media (max-width: 770px) {
      margin-top: 10px;
      width: 300px;
      height: 200px;
    }
  }
`;

export { Container, Intro, TextArea, ImageArea };

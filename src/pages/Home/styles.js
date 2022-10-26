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

const ProjectContainer = styled.section`
  width: 100%;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: #fff;
      position: relative;

      :before {
        content: "";
        position: absolute;
        width: 150px;
        height: 3px;
        background: #fff;
        bottom: 5px;
        right: -170px;
      }
    }

    a {
      color: #fff;
      text-decoration: none;

      :hover {
        cursor: pointer;
        font-weight: bold;
      }
    }
  }

  .projects {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .box {
      margin: 15px;
      width: 331px;
      height: auto;
      border: 1px solid #ffffff90;

      .img {
        width: 100%;
        height: 200px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .tech {
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          margin: 0 15px;
        }
      }
      .description {
        padding: 15px;

        h3 {
          margin-bottom: 20px;
        }

        p {
          margin-bottom: 20px;
        }

        a {
          padding: 5px 15px;
          border: 1px solid #fff;
          margin-right: 30px;
          color: #fff;
          text-decoration: none;
          font-size: 16px;

          :hover {
            background: #fff;
            color: #282c33;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

const AboutContainer = styled.section``;

const ContactContainer = styled.section``;

export {
  Container,
  Intro,
  TextArea,
  ImageArea,
  ProjectContainer,
  AboutContainer,
  ContactContainer,
};

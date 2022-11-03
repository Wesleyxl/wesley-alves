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

    i {
      margin-right: 15px;
    }

    h2 {
      color: #fff;
      position: relative;
      font-size: 30px;

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

const SkillContainer = styled.section`
  margin-top: 100px;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      margin-right: 15px;
    }

    h2 {
      color: #fff;
      position: relative;
      font-size: 30px;

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
  }

  .animation {
    max-width: 400px;
  }
  .skills {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    .box-area {
      /* display: flex; */

      .top,
      .bottom {
        display: flex;
        margin-bottom: 20px;

        @media (max-width: 500px) {
          flex-wrap: wrap;
          justify-content: center;

          .noneindex {
            display: none;
          }
        }
      }

      .box {
        margin-right: 15px;
        width: 100%;
        max-width: 170px;
        border: 1px solid #fff;

        @media (max-width: 500px) {
          margin-top: 10px;
        }

        .title {
          width: 100%;
          border-bottom: 1px solid #fff;
          padding: 10px;

          p {
            width: 100%;
            text-align: center;
          }
        }

        .description {
          padding: 10px;

          p {
            font-size: 16px;
            opacity: 0.7;
            line-height: 24px;
          }
        }
      }
    }
  }
`;

const AboutContainer = styled.section`
  .title {
    margin: 50px 0 -55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 965px) {
      margin: 50px 0 0;
    }

    i {
      margin-right: 15px;
    }

    h2 {
      color: #fff;
      position: relative;
      font-size: 30px;

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
  }

  .about {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      max-width: 550px;

      p {
        margin-bottom: 20px;
      }

      .btn-area {
        margin-top: 60px;

        a {
          border: 1px solid #fff;
          text-decoration: none;
          text-align: center;
          padding: 7px 31px;
          font-size: 22px;
          color: #fff;

          :hover {
            background: #fff;
            color: #000;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

const ContactContainer = styled.section`
  margin-top: 50px;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      margin-right: 15px;
    }

    h2 {
      color: #fff;
      position: relative;
      font-size: 30px;

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
  }

  .contact {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 930px) {
      justify-content: center;
    }

    .left {
      max-width: 550px;

      p {
        margin-bottom: 20px;
      }

      .form {
        width: 100%;
        text-align: right;

        .group {
          width: 100%;
          display: flex;

          .input-area {
            flex: 1;
          }
        }

        input {
          width: 100%;
          height: 40px;
          margin: 10px 0;
          padding: 0 15px;
          border: 1px solid #aaaaaa;
          background: none;
          color: #fff;
        }
        textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #aaaaaa;
          background: none;
          color: #fff;
        }

        button {
          margin-top: 20px;
          width: 100px;
          height: 40px;
          border: 1px solid #aaaaaa;
          background: none;
          align-items: right;
          color: #fff;
          font-size: 22px;

          :hover {
            font-weight: bold;
            color: #000;
            background: #fff;
            cursor: pointer;
          }
        }
      }
    }

    .right {
      .box {
        border: 1px solid #fff;
        padding: 15px;

        ul {
          margin-top: 20px;
        }
        li {
          list-style: none;
          margin: 10px 0;

          a {
            color: #fff;
            text-decoration: none;
            font-size: 20px;

            i {
              margin-right: 10px;
            }

            :hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export {
  Container,
  Intro,
  TextArea,
  ImageArea,
  ProjectContainer,
  SkillContainer,
  AboutContainer,
  ContactContainer,
};

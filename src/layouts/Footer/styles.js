import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  border-top: 1px solid #fff;

  .content {
    padding: 15px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        a {
          text-decoration: none;
          color: #fff;
          margin-right: 40px;

          :hover {
            font-weight: bold;
          }
        }

        p {
          margin-top: 20px;
          opacity: 0.7;
        }

        img {
          width: 26px;
        }
      }

      .right {
        text-align: center;
        font-size: 25px;

        i {
          margin: 20px 10px 0;
          opacity: 0.6;
        }
      }
    }

    .copy {
      text-align: center;

      i {
        margin-right: 5px;
      }

      a {
        color: #fff;
        text-decoration: none;
        margin-left: 5px;

        :hover {
          font-weight: bold;
        }
      }
    }
  }
`;

export { Container };

import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  border-top: 1px solid #fff;

  .content {
    padding: 15px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

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

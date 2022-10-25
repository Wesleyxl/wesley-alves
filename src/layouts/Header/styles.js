import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;

  nav {
    width: 100%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;

      li {
        margin-right: 15px;
        list-style: none;

        img {
          width: 26px;
        }

        a {
          color: #fff;
          text-decoration: none;
          font-size: 20px;
          position: relative;

          :hover {
            font-weight: bold;

            :before {
              transform: scale3d(1, 1, 1);
            }
            :after {
              transform: scale3d(1, 1, 1);
            }
          }

          ::before {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 100%;
            height: 4px;
            border-radius: 2px;
            background: #fff;
            transform: scale3d(0, 1, 1);
            transform-origin: center;
            transition: ease 0.8s;
          }

          ::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 25%;
            width: 50%;
            height: 4px;
            border-radius: 2px;
            background: #fff;
            transform: scale3d(0, 1, 1);
            transform-origin: center;
            transition: ease 0.8s;
          }
        }

        .active {
          font-weight: bold;
          :before {
            transform: scale3d(1, 1, 1);
          }
          :after {
            transform: scale3d(1, 1, 1);
          }
        }

        .inactive {
          font-weight: normal;

          :hover {
            :before {
              transform: scale3d(0, 1, 1);
            }
            :after {
              transform: scale3d(0, 1, 1);
            }
          }
        }

        select {
          margin-left: 30px;
          width: 70px;
          height: 30px;
          background: transparent;
          color: #fff;
          padding: 5px;
          outline: none;

          :hover {
            cursor: pointer;
          }
          option {
            color: #000;

            :hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export { Container };

import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  background: #282c33;

  @media (max-width: 767px) {
    border-bottom: 2px solid #ffffff;
  }
`;

const DesktopMenu = styled.div`
  width: 100%;
  height: 80px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: none;
  }

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

      /* .inactive {
        font-weight: normal;

        :hover {
          :before {
            transform: scale3d(0, 1, 1);
          }
          :after {
            transform: scale3d(0, 1, 1);
          }
        }
      } */

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
`;

const MobileMenu = styled.div`
  width: 100%;
  height: 80px;

  @media (min-width: 768px) {
    display: none;
  }

  ul {
    padding: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;

    img {
      width: 50px;
    }

    button {
      border: none;
      background: transparent;
      font-size: 36px;
      color: #fff;
    }
  }

  nav {
    position: absolute;
    width: 80%;
    height: calc(100vh - 80px);
    padding: 15px 15px 15px 40px;
    background: #282c33;
    border-right: 2px solid #fff;
    transition: ease 0.5s;

    li {
      list-style: none;
      margin: 40px 0;

      a {
        color: #fff;
        font-size: 36px;
        text-decoration: none;
      }
    }
  }
  .active {
    left: 0;
  }

  .inactive {
    left: -1500px;
  }
`;

const SocialMedias = styled.div`
  position: fixed;
  left: 40px;
  top: 25%;

  .line {
    width: 2px;
    height: 150px;
    background: #fff;
    margin: auto;
  }

  li {
    list-style: none;
    margin: 10px 0;

    a {
      color: #fff;
      font-size: 22px;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export { Container, MobileMenu, DesktopMenu, SocialMedias };

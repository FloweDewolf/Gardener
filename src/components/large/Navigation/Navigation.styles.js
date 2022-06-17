import styled from 'styled-components'

export const StyledNav = styled.nav`
  justify-self: center;
  margin-top: 30px;
  height: 100px;
  width: 90%;

  ul {
    display: flex;
    width: 100%;
    list-style: none;

    li {
      width: 100%;
      border-radius: 25px 10px;
      cursor: pointer;

      a {
        display: block;
        height: 100%;
        font-size: ${({ theme }) => theme.fontSize.m};
        text-align: center;
        text-shadow: 7px 4px 1px rgba(10, 46, 54, 0.5);
        line-height: 100px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};

        :focus {
          color: ${({ theme }) => theme.colors.gray};
        }
      }

      div {
        display: flex;
        justify-content: center;
      }
    }
  }
`

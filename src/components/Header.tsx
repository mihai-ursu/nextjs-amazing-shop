import Link from "next/link";
import styled from "styled-components";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

const HeaderStyles = styled.header`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, var(--column-width)));
  gap: 0 2rem;
  margin: 0;
  height: 6rem;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: 0 1rem;
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    gap: 0 1rem;
    margin: 0;
  }

  .logo {
    grid-column: 1 / span 2;
    display: flex;
    align-items: center;
    h4 {
      margin: 0;
    }
  }

  .primary-nav {
    grid-column: 4 / span 6;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin-right: 4rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .secondary-nav {
    grid-column-end: span 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      margin-right: 1rem;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0.5rem;
      &:last-child {
        margin-right: 0;
      }
      svg {
        width: 1.2rem;
        height: 1.2rem;
        display: block;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="logo">
        <Link href="/">
          <a>
            <h4>Logo</h4>
          </a>
        </Link>
      </div>
      <nav className="primary-nav">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/sale">Sale</Link>
        <Link href="/about">About</Link>
        <Link href="/support">Support</Link>
      </nav>
      <nav className="secondary-nav">
        <button>
          <FiSearch />
        </button>
        <button>
          <FiShoppingCart />
        </button>
      </nav>
    </HeaderStyles>
  );
};

export default Header;

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import './Header.scss';

const Header = () => {
  const router = useRouter();
  const currentPath = router && router.route;

  return (
    <header className="Header">
      <h1 className="Header__title">
        <Link href="/">NEXTJS BOILERPLATE</Link>
      </h1>
      <nav className="Header__nav">
        <ul className="Header__nav__items">
          <li
            className={`Header__nav__item ${
              currentPath === '/ssr' ? 'Header__nav__item--active' : ''
            }`}
          >
            <Link href="/ssr">
              <a>Menu Item 1</a>
            </Link>
          </li>
          <li
            className={`Header__nav__item ${
              currentPath === '/sg' ? 'Header__nav__item--active' : ''
            }`}
          >
            <Link href="/sg">
              <a>Menu Item 2</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

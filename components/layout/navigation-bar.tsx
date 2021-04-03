import Link from 'next/link'
import { FC } from 'react'

import classes from './navigation-bar.module.css'
import Logo from './logo'

const NavigationBar: FC = () => (
  <header className={classes.header}>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <nav>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default NavigationBar

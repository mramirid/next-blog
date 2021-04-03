import { FC } from 'react'

import NavigationBar from './navigation-bar'

const Layout: FC = ({ children }) => (
  <>
    <NavigationBar />
    <main>{children}</main>
  </>
)

export default Layout

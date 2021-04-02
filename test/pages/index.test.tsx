import { render } from '@testing-library/react'

import HomePage from '../../pages/index'

describe('Home Page', () => {
  it('Matches snapshot', async () => {
    const { asFragment } = render(<HomePage />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

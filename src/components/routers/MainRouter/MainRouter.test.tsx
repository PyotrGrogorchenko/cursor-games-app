import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import { mount } from 'enzyme'
import { PageError, routes } from './const'
import { MainRouter } from './index'

describe('MainRouter: wrapper', () => {
  const getWrapper = (route: string) => mount(
    <MemoryRouter initialEntries={[route]} >
      <div><MainRouter/></div>
    </MemoryRouter>
  )

  test('should render the home page', () => {
    expect(getWrapper('/').find(routes['/'])).toHaveLength(1)
  })

  test('should render the leaderboard page', () => {
    expect(getWrapper('/leaderboard').find(routes['/leaderboard'])).toHaveLength(1)
  })

  test('should render the game page', () => {
    expect(getWrapper('/game').find(routes['/game'])).toHaveLength(1)
  })

  test('should render the profile page', () => {
    expect(getWrapper('/profile').find(routes['/profile'])).toHaveLength(1)
  })

  test('should render the signup page', () => {
    expect(getWrapper('/signup').find(routes['/signup'])).toHaveLength(1)
  })

  test('should render the signin page', () => {
    expect(getWrapper('/signin').find(routes['/signin'])).toHaveLength(1)
  })

  test('should render the error page', () => {
    expect(getWrapper('/random').find(PageError)).toHaveLength(1)
  })
})

import React from 'react'
import { mount } from 'enzyme'
import { ErrorBoundary } from './ErrorBoundary'

const TastComponent = (): JSX.Element => <div>TestComponent</div>

describe('ErrorBoundary: wrapper', () => {
  test('Test error', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <TastComponent/>
      </ErrorBoundary>
    )

    const error = new Error('test')
    wrapper.find(TastComponent).simulateError(error)
  })
})

import React, { FC, ComponentType } from 'react'
import { Signin } from '@pages/Signin'
import { userAuthSelector } from '@store/selectors'

export function privateRoute(this: unknown, WrappedComponent: ComponentType) {
  const PrivateComponent: FC = () => {
    const isAuth = userAuthSelector()
    return (
      <>
        {isAuth ? <WrappedComponent/> : <Signin/>}
      </>
    )
  }
  return PrivateComponent
}

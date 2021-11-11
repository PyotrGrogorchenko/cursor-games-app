import React, { FC } from 'react'
import { conditionRequestSelector, loaderSelector } from '@store/selectors'
import { Wrapper, Slider } from './styles'

const LinearLoader: FC = () => {
  const isRequest = conditionRequestSelector()
  const isLoader = loaderSelector()
  return (
    <>
      {(isRequest || isLoader) && (
        <Wrapper>
          <Slider/>
        </Wrapper>
      )}
    </>
  )
}
export const LinearLoaderTSX = LinearLoader

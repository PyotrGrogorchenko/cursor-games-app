import React, {
  FC, useCallback, useEffect, useRef, useState
} from 'react'
import { useDispatch } from 'react-redux'
import { userDataPropSelector } from '@store/selectors'
import { avatar } from '@saga/user/actions'
import { Button } from '@components/UI/Button'
import {
  Box, InputFile, AvatarImg
} from './styles'
import { Props } from './types'
import { getAvatarPath } from './utils/getAvatarPath'

const Avatar: FC<Props> = (props: Props) => {
  const { showBtn } = props
  const refAvatar = useRef(null)
  const pathAvatar = String(userDataPropSelector('avatar'))
  const [srcAvatar, setSrcAvatar] = useState(getAvatarPath(pathAvatar))
  const dispatch = useDispatch()

  useEffect(() => {
    setSrcAvatar(getAvatarPath(pathAvatar))
  }, [pathAvatar])

  const onClickAvatar = useCallback((e: OnClick) => {
    e.preventDefault()
    const input = refAvatar.current as unknown as HTMLInputElement
    input.click()
  }, [refAvatar])

  const onChangeAvatar = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target.files?.length) return
    const file = e.target.files[0]
    if (!file.type.match('image')) return
    const reader = new FileReader()
    reader.onload = () => {
      dispatch(avatar(file))
    }
    reader.readAsDataURL(file)
  }, [])

  return (
    <Box>
      <AvatarImg src={srcAvatar} alt='Avatar' {...props}/>
      {showBtn && (<Button variant='contained' onClick={onClickAvatar}>Upload a photo</Button>)}
      <InputFile
        type='file'
        accept='.png, .jpg, .jpeg, .gif'
        onChange={onChangeAvatar}
        ref={refAvatar}
      />
    </Box>
  )
}

export const AvatarTSX = Avatar

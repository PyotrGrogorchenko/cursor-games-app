import React, {
  FC, useCallback, useEffect, useRef, useState
} from 'react'
import {
  Avatar, Box, Button, withStyles
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { userDataPropSelector } from '@store/selectors'
import { avatar } from '@saga/user/actions'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import { styles } from './styles'
import { Props, AvatarSizeStyle } from './types'
import { getAvatarPath } from './utils/getAvatarPath'

const AvatarUI: FC<Props> = (props) => {
  const { classes, showBtn, size } = props
  const refAvatar = useRef(null)
  const pathAvatar = String(userDataPropSelector('avatar'))
  const [srcAvatar, setSrcAvatar] = useState(getAvatarPath(pathAvatar))
  const dispatch = useDispatch()

  const avatarClassName: AvatarSizeStyle = (size ? `${size}Size` : 'smallSize') as AvatarSizeStyle

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
    <Box className={classes.root}>
      <Avatar
        className={classes[avatarClassName]}
        src={srcAvatar}
      />
      {showBtn && (
        <Button
          variant='contained'
          color='primary'
          type='submit'
          size='small'
          id='upload-a-photo'
          onClick={onClickAvatar}
          startIcon={<PhotoCameraIcon/>}
        >
          Upload a photo
        </Button>
      )}
      <input
        className={classes.inputFile}
        type='file'
        accept='.png, .jpg, .jpeg, .gif'
        onChange={onChangeAvatar}
        ref={refAvatar}
      />
    </Box>
  )
}

export const AvatarUITSX = withStyles(styles)(AvatarUI)

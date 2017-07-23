import React from 'react'
import { Placeholder } from './Placeholder'

export const ProfilePic = ({ src }) => src ? <img src={src} alt="avatar"/> :
    <Placeholder iconName="mugshot" title="No picture" description="Click to change"/>
import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { Card, ProfilePic } from '../../Shared/Components'
import UserPicChange from './UserPicChange'
import { CHANGE_PIC } from '../../Store/Actions'
import AppToaster from '../../Shared/Toaster'

const UserPicTemplate = ({ pic, dialogOpen, toggleDialog, changePic }) => 
    <Card className="profile-pic" interactive onClick={toggleDialog}>
        <ProfilePic src={pic} />
        <UserPicChange save={changePic} cancel={toggleDialog} open={dialogOpen}/>
    </Card>

class UserPicContainer extends React.Component {
    state = { dialogOpen: false }

    toggleDialog = () => this.setState({ dialogOpen: !this.state.dialogOpen })

    changePic = url => firebase.auth().currentUser.updateProfile({ photoURL: url })
                               .then(() => this.props.updatePic(url))
                               .then(this.toggleDialog)
                               .then(AppToaster.show({ message: 'Picture updated'}))

    render() {
        return <UserPicTemplate pic={this.props.pic} dialogOpen={this.state.dialogOpen}
            toggleDialog={this.toggleDialog} changePic={this.changePic}/>
    }
}

const UserPic = connect(
    state => ({ pic: state.user.photoURL }),
    dispatch => ({ updatePic: url => dispatch(CHANGE_PIC(url)) })
)(UserPicContainer)

export default UserPic;
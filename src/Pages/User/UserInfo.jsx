import React from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import firebase from 'firebase'
import { EditableText, Button, Intent } from "@blueprintjs/core"
import { Card } from '../../Shared/Components'
import AppToaster from '../../Shared/Toaster'

const SocialLink = ({ iconName, ...otherProps }) => <h4><FontAwesome name={iconName} /><EditableText {...otherProps}/></h4>

const UserInfoTemplate = ({ user, changeProfile, changeEmail, save }) =>
    <Card className="profile-info">
        <h3><EditableText placeholder="Display Name" value={user.displayName}
            onChange={value => changeProfile({ displayName: value})}/></h3>
        <h3><EditableText placeholder="Email" value={user.email}
            onChange={value => changeEmail(value)}/></h3>
        <div className="social-columns">
            <SocialLink iconName="twitter" placeholder="Twitter" />
            <SocialLink iconName="facebook" placeholder="Facebook"/>
            <SocialLink iconName="linkedin" placeholder="LinkedIn"/>
            <SocialLink iconName="stack-overflow" placeholder="StackOverflow"/>
            <SocialLink iconName="github" placeholder="Github"/>
            <SocialLink iconName="globe" placeholder="Website"/>
        </div>
        <div className="actions">
            <Button onClick={save} intent={Intent.PRIMARY}>Save</Button>
        </div>
    </Card>

class UserInfoContainer extends React.Component {
    state = { user: this.props.user }

    changeEmail = email => this.setState({ user: {...this.state.user, email } })

    changeProfile = profile => this.setState({ user: {...this.state.user, ...profile } })

    save = () => {
        if (this.state.user.email !== this.props.user.email)
            firebase.auth().currentUser.updateEmail(this.state.user.email)
                    .then(AppToaster.show({ message: 'Email updated'}))
        if (this.state.user.displayName !== this.props.user.displayName)
            firebase.auth().currentUser.updateProfile({ displayName: this.state.user.displayName })
                    .then(AppToaster.show({ message: 'Display name updated'}))
    }

    render() {
        return <UserInfoTemplate user={this.state.user} save={this.save}
            changeEmail={this.changeEmail} changeProfile={this.changeProfile}
        />
    }
}

const UserInfo = connect(state => ({ user: state.user }))(UserInfoContainer)

export default UserInfo
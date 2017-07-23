import React from 'react'
import { InputGroup, Dialog, Intent, Button } from '@blueprintjs/core'

const UserPicChangeTemplate = ({ value, change, save, cancel, open }) =>
    <Dialog iconName="inbox" isOpen={open} onClose={cancel} title="Change profile picture">
        <div className="pt-dialog-body">
            <InputGroup name="picURL" placeholder="Picture URL" leftIconName="mugshot" value={value} onChange={e => change(e.target.value)} />
        </div>
        <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
                <Button text="Cancel" onClick={cancel} />
                <Button intent={Intent.PRIMARY} onClick={save} text="Save" />
            </div>
        </div>
    </Dialog>

class UserPicChange extends React.Component {
    state = { value: '' }

    render() {
        return <UserPicChangeTemplate open={this.props.open}
            value={this.state.value} change={value => this.setState({ value })}
            save={() => this.props.save(this.state.value)} cancel={this.props.cancel} 
        />
    }
}

export default UserPicChange
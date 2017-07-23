import React from 'react'
import { mapValues } from 'lodash'

export default (initialState, handlers) => Component =>
    class extends React.Component {
        state = initialState || {}

        stateHandler = { setState: this.setState.bind(this) }

        getProps = () => ({ ...this.props, ...this.handlersToProps })

        prepareHandler = h => typeof h !== 'function' ? h : (...args) => h({
             ...this.stateHandler, state: this.state, props: this.getProps()
        }, ...args)

        handlersToProps = !handlers ? null : mapValues(handlers, this.prepareHandler)

        render() {
            return Component(this.getProps(), this.state, this.stateHandler)
        }
    }
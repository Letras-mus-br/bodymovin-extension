import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Variables from '../../helpers/styles/variables'
import {
  getPropertyMessageCount,
  getTotalMessagesCount,
} from '../../helpers/reports/counter'
import RowHeader from './components/RowHeader'
import Message from './components/Message'

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      backgroundColor: Variables.colors.gray,
      padding: '6px 0',
      overflow: 'hidden',
      borderBottom: `1px solid ${Variables.colors.gray_lighter}`,
    },
    content: {

    }
})

class Layer extends React.Component {

  state = {
    isCollapsed: false,
  }

  toggleCollapse = () => {
    if (this.props.messages
      && this.props.messages.length
    )
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    })
  }

  buildHeader = () => {
    const messageCount = getPropertyMessageCount(this.props.messages, this.props.renderers, this.props.messageTypes)
    return (
      <RowHeader
        name={this.props.name}
        isCollapsed={this.state.isCollapsed}
        toggleCollapse={this.toggleCollapse}
        messages={messageCount}
      />
    )
  }

  buildContent = () => {
    if (!this.state.isCollapsed) {
      return null
    } else {
      const messages = this.props.messages
      return (
        <div className={css(styles.content)}>
        {messages.map((message, index) => (
          <Message 
            key={index}
            message={message}
          />
        ))}
        </div>
      )
    }
  }

  render() {
    const messageCount = getPropertyMessageCount(this.props.messages, this.props.renderers, this.props.messageTypes)
    const totalMessages = getTotalMessagesCount(messageCount)
    if (!totalMessages) {
      return null
    }
    return (
      <div className={css(styles.wrapper)}>
        {this.buildHeader()}
        {this.buildContent()}
      </div>
      );
  }
}

export default Layer
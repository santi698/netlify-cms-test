import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';

class UserInfo extends Component {
  render() {
    const { userTwitter } = this.props.config;
    const { expanded } = this.props;
    return <Follow options={{ count: expanded ? true : 'none' }} username={userTwitter} />;
  }
}

export default UserInfo;

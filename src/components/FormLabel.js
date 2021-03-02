import React, { Component } from 'react'

export default class FormLabel extends Component {
  render() {
    const { labelName } = this.props;
    return (
      <div>
        <label className='input-label'>{labelName}</label>
      </div>
    )
  }
}

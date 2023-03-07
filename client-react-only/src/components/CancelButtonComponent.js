import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { FaBan } from 'react-icons/fa'

export default class CancelButtonComponent extends Component {
  render() {
    const { toggleAddForm } = this.props
    return (
        <Button
        color="warning"
        onClick={toggleAddForm}
        className="text-white"
      >
        <FaBan className="mr-2" /> Cancel
      </Button>
    )
  }
}

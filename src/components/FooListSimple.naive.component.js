import React, { Component } from 'react'

import { getFooList } from '../api'

const sleep = (time) => new Promise((resolve) => setInterval(resolve, time))
class FooList extends Component {
  state = {
    dataPackage: console.log('state init') || getFooList()
  }
  async componentWillMount() {
    console.log('## componentWillMount')
    let dataPackage = await this.state.dataPackage
    // await sleep(0)
    console.log('after sleep', this.state, dataPackage)
    this.setState({ dataPackage })
  }

  render() {
    let { dataPackage } = this.state
    console.log('render', this.state, dataPackage instanceof Promise)
    if (dataPackage instanceof Promise) {
      throw dataPackage
    }
    return (
      <pre>{JSON.stringify(dataPackage, null, 2)}</pre>
    )
  }
}

export default FooList
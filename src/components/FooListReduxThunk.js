import React from 'react'
import { connect } from 'react-redux'

import { getFooList } from '../api'

const RECEIVE_FOO_LIST = "RECEIVE_FOO_LIST"

function FooList (props) {
  if (!props.fooList) {
    throw props.getFooListAction()
  }
  
  return (
    <pre>{JSON.stringify(props.fooList, null, 2)}</pre>
  )
}

const mapStateToProps = (state) => {
  return {
    fooList: state.fooList
  }
}

const getFooListAction = async () => {
  return {
    type: RECEIVE_FOO_LIST,
    data: await getFooList,
  }
}
export default connect(mapStateToProps, { getFooListAction })(FooList)
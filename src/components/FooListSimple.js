import React from 'react'

import { getFooList } from '../api'

let cache = {}

function FooList () {
  if (!cache.fooList) {
    let promise = getFooList().then(fooList => {
      cache.fooList = fooList
    })
    throw promise
  }
  
  return (
    <pre>{JSON.stringify(cache.fooList, null, 2)}</pre>
  )
}

export default FooList
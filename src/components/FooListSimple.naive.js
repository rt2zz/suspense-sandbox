import React, { useRef, useState, useMemo } from 'react'

import { getFooList } from '../api'

function FooList () {
  let [dataPackage, setDataPackage] = useState()
  console.log('# dataPackage', dataPackage)

  useMemo(async () => {
    if (!dataPackage) {
      console.log('memo run')
      dataPackage = getFooList()
      setDataPackage(dataPackage)
      setDataPackage(await dataPackage)
    }
  }, [])
  
  console.log('is promise?', dataPackage instanceof Promise)
  if (dataPackage instanceof Promise) {
    throw dataPackage
  }
  return (
    <pre>{JSON.stringify(dataPackage, null, 2)}</pre>
  )
}

export default FooList
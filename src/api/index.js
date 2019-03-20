
export function getFooList () {
  return new Promise((resolve, reject) => {
    console.log('## api.getFooList')
    setTimeout(() => {
      resolve(["hello", "suspense"])
    }, 2000)
  })
}
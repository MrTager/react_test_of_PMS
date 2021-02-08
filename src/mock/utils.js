
export function decode(url) {
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
    if (!search) {
      return {}
    }
    const obj = {}
    const searchArr = search.split('&')
    searchArr.forEach(v => {
      const index = v.indexOf('=')
      if (index !== -1) {
        const name = v.substring(0, index)
        const val = v.substring(index + 1, v.length)
        obj[name] = val
      }
    })
    return obj
}

export function decodeParam(str){
  let newObj = {};
  str.split('&').map(item=>{
    let arr2 = item.split('=')
    let obj = {}
    obj[arr2[0]] = arr2[1]
    return obj
  }).forEach((item)=>{
    newObj = Object.assign(newObj,item)
  })
  return newObj
}
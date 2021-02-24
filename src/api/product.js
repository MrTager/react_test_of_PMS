import request from '@/utils/request'

export function productList(data) {
  return request({
    url: '/product/list/',
    method: 'get',
    params: { 'page':data.page,'rows':data.rows}
  })
}
export function productInfo(data) {
  return request({
    url: '/product/info/',
    method: 'get',
    params: data
  })
}
export function productOperate(data){
  return request({
    url: '/product/operate/',
    method: 'post',
    data
  })
}
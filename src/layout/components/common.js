
export function jsonRemove(data, key, value) {
    data.map((item, key) => {
      if(item['id'] == value) {
        data.splice(key, 1)
      }
    })

    return data
  }

export function statusToText(status){
  switch (parseInt(status)) {
    case 0:
      return "审核中"
      break;
    case 1:
      return "已上线"
      break;
    case 2:
      return "已下架"
      break;
    case 3:
      return "已拒绝"
      break;
    default:
      return "异常"
      break;
  }
}

export function storeStatusType(status){
  switch (parseInt(status)) {
    case 1:
      return "购物"
    case 2:
      return "美食"
    case 3:
      return "休闲"
    case 4:
      return "亲子"
    default:
      return "暂无"
  }
}
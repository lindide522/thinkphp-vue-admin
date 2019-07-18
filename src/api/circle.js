import { get, post, deletes, put } from '@/utils/request'

export function getList(param) {
    return get('/api/circle', param)
}

export function update_status(ids, status) {
    return post('/api/circle/audit', {
        ids: ids,
        status: status
    })
}

const StatusAll = [
    {k: 0, v: "全部"},
    {k: 4, v: "待审核"},
    {k: 1, v: "已上线"},
    {k: 2, v: "已屏蔽"},
    {k: 3, v: "已删除"},
    {k: 4, v: "待审核"},
]

export function statusText(status) {
    status = parseInt(status)

    let s = StatusAll.find((s) => {
        return s.k == status
    })

    if(s) {
        return s.v
    }else{
        return "未知"
    }
}

export function getStatus(v) {
    let s = StatusAll.find((s) => {
        return s.v == v
    })

    if(s) {
        return s.k
    }else{
        return 0
    }
}

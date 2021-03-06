/**
 * @fileoverview todo server api
 * @since 2017-04-04 11:51
 * @author chenyiqin
 */

import fetch from '../util/fetch'
import * as server from '../constant/server'

export const getTodoList = async (data) => {
    const result = await fetch({
        url: `${server.SERVER_PATH}/${server.GET_TODO_LIST_METHOD}`,
        data,
    })

    return result
}

export const getTodo = async (data) => {
    const result = await fetch({
        url: `${server.SERVER_PATH}/${server.GET_TODO_METHOD}`,
        data,
    })

    return result
}

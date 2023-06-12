
import { BasePagination } from "../base/base.dto"
import { axiosIntance, transformRequest } from "../base/base.service"
import { Post } from "./mock.model"

const prefix = 'posts'

// export const fetchPost = async () => {
//   return await transformRequest<BasePagination<Post>>(axiosIntance.request({
//     method: "get",
//     url: `${prefix}`,
//   }))
// }



export async function fetchPost() {
  return await transformRequest({
    url: `${prefix}`,
    method: 'get'
  });
}
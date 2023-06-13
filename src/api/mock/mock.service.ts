
import { transformRequest } from "../base/base.service";
import { Post } from "./mock.model";

const prefix = 'posts'


export async function fetchPost() {
  return await transformRequest<Post[]>({
    url: `${prefix}`,
    method: 'get'
  });
}
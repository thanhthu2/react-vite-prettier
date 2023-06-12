export interface BaseInfo {
  createdAt: Date
  updatedAt: Date
  createdBy: string
  updatedBy: string
}

export interface BasePagination<T> {
  items: T[]
  total: number
}

export interface IBaseSearchParams {
  page: number;
  pageSize: number;
}

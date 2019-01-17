import axios from '@/libs/api.request'
import qs from 'qs'

export const AAddreceivable = (form) => {
  return axios.request({
    url: 'addreceivable',
    data: form,
    method: 'post'
  })
}

export const putCategoryList4 = (project_id) => {
  return axios.request({
    params: {
      project_id
    },
    url: '/get_category_for_add_receivable',
    method: 'get'
  })
}

export const putProjectList4 = (user_id) => {
  return axios.request({
    url: '/get_project_list_by_id_for_add_receivable',
    params: {
      user_id: user_id
    },
    method: 'get'
  })
}

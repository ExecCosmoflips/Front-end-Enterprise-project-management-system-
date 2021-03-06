import {
  putCategoryList,
  putExpendInfo,
  putProjectList
} from '../../api/check_expend'

export default {
  state: {
    categoryList: [],
    expendInfo: [],
    projectList: []
  },
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    },
    setExpendInfo (state, expendInfo) {
      state.expendInfo = expendInfo
    },
    setProjectList (state, projectList) {
      state.projectList = projectList
    }
  },
  actions: {

    getProjectListStaff ({ state, commit }, user_id) {
      return new Promise((resolve, reject) => {
        putProjectList(user_id).then(response => {
          const data = response.data
          commit('setProjectList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getCategoryList ({ state, commit }, project_id) {
      return new Promise((resolve, reject) => {
        putCategoryList(project_id).then(response => {
          const data = response.data
          commit('setCategoryList', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    listExpendInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        putExpendInfo().then(response => {
          const data = response.data
          commit('setExpendInfo', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }

}

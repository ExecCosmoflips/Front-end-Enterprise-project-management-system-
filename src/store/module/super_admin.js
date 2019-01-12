import {
  getAAddDepartmentAdmin,
  getAAddTreasurer,
  setuppDepatmentName
} from '../../api/super_admin'

export default {
  state: {
    department: '',
    username: '',
    name: '',
    email: '',
    phone: '',
    gender: ''
  },
  mutations: {
    setDepartment (state, department) {
      state.department = department
    },
    setUsername (state, username) {
      state.username = username
    },
    setName (state, name) {
      state.name = name
    },
    setEmail (state, email) {
      state.email = email
    },
    setPhone (state, phone) {
      state.phone = phone
    },
    setGender (state, gender) {
      state.gender = gender
    }
  },

  actions: {
    getAddDepartmentAdmin ({ state, commit }, formItem) {
      console.log(formItem)
      return new Promise((resolve, reject) => {
        getAAddDepartmentAdmin(formItem).then(JsonResponse => {
          const data = JsonResponse.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getAddTreasurer ({ state, commit }, formItem) {
      console.log(formItem)
      return new Promise((resolve, reject) => {
        getAAddTreasurer(formItem).then(JsonResponse => {
          const data = JsonResponse.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    SetupDepartmentName ({ state, commit }, formItem) {
      console.log(formItem)
      return new Promise((resolve, reject) => {
        setuppDepatmentName(formItem).then(JsonResponse => {
          const data = JsonResponse.data
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

<template>
<div>
  <Card :bordered="false">
    <Divider orientation="left">收入类别</Divider>
    <MyForm status="1" :items="items1" title="收入名"></MyForm>
    <Divider orientation="left">支出类别</Divider>
    <MyForm status="2" :items="items2" title="支出名"></MyForm>
  </Card>

  <Card :bordered="false">
  </Card>
</div>
</template>

<script>
import MyForm from './form-model'
import { getFinancialModel } from '../../../api/department'
import { mapState } from 'vuex'
export default {
  components: {
    MyForm
  },
  props: {
    project_id: {
      type: Number
    }
  },
  name: 'Financial',
  data () {
    return {
      items1: [],
      items2: []
    }
  },
  computed: {
    ...mapState({
      projectInfo: state => state.department.projectInfo
    })
  },
  methods: {
  },
  mounted () {
    getFinancialModel(this.project_id).then(response => {
      let data = response.data
      for (let i = 0; i < data.length; i++) {
        if (data[i].status === 1) {
          this.items1.push(data[i])
        } else {
          this.items2.push(data[i])
        }
      }
    })
  }
}
</script>

<style scoped>

</style>

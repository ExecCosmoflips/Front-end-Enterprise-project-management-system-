<template>
  <Form :model="formItem" :label-width="80">
    <Row style="margin-top: 20px">
      <Col span="8">
        <FormItem label="部门名：">
          <Select v-model="formItem.department" @on-change="getProject(formItem.department)">
            <Option v-for=" item in departmentList " :key="item.department_id" :value="item.department_id" > {{ item.department_name }} </Option>
          </Select>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="项目名：">
          <Select v-model="formItem.project"  @on-change="getIncome(formItem.project)">
            <Option v-for=" item in projectList " :key="item.id" :value="item.id"> {{ item.title }} </Option>
          </Select>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="应收款项：">
          <Select v-model="formItem.receivable_title"
                  @on-change="getIncomeInfoByTitle(formItem.receivable_title, formItem.project)">
            <Option v-for=" item in incomeTitleList "
                    :key="item.income_id" :value="item.income_id"> {{ item.income_title }} </Option>
          </Select>
        </FormItem>
      </Col>
    </Row>
    <Table style="margin-top: 20px" border :columns="columns" :data="data3"></Table>
  </Form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'check-income',
  data () {
    return {
      formItem: {
        department: '',
        project: '',
        receivable_title: ''
      },
      columns: [
        {
          title: '部门',
          key: 'department_name'
        },
        {
          title: '项目',
          key: 'project_title'
        },
        {
          title: '应收类别',
          key: 'receivable_category'
        },
        {
          title: '应收款项',
          key: 'receivable_title'
        },
        {
          title: '确认收入数',
          key: 'confirm_num'
        },
        {
          title: '开票税率',
          key: 'tax_rate'
        }
      ],
      data3: []
    }
  },
  computed: {
    ...mapState({
      projectList: state => state.advance.projectList,
      departmentList: state => state.advance.departmentList,
      incomeTitleList: state => state.income.incomeTitleList,
      incomeInfo: state => state.income.incomeInfo
    })
  },
  methods: {
    ...mapActions([
      'getProjectList',
      'getDepartmentList',
      'getIncomeTitleList',
      'listIncomeInfo'
    ]),
    getProject (department_id) {
      this.formItem.project = ''
      this.formItem.receivable_title = ''
      this.getProjectList(department_id)
      this.listIncomeInfo().then(res => {
        this.data3 = this.incomeInfo.filter(item => item['department_id'] === department_id)
      })
    },
    getIncome (project_id) {
      this.formItem.receivable_title = ''
      this.getIncomeTitleList(project_id)
      this.listIncomeInfo().then(res => {
        this.data3 = this.incomeInfo.filter(item => item['project_id'] === project_id)
      })
    },
    getIncomeInfoByTitle (income_id, project_id) {
      this.listIncomeInfo()
      this.data3 = this.incomeInfo.filter(item => item['income_id'] === income_id && item['project_id'] === project_id)
    }
  },
  mounted () {
    this.getDepartmentList()
    this.listIncomeInfo().then(res => {
      this.data3 = res
    })
  }
}
</script>

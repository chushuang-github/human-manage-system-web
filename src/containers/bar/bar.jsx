import React, {Component} from 'react'
import {Card, Button} from 'antd'
import ReactEcharts from 'echarts-for-react' 

/*
后台管理的柱状图路由组件
 */
export default class Bar extends Component {
  state = {
    sales: [5, 20, 36, 10, 10, 20],
    inventorys: [15, 30, 46, 20, 20, 40]
  }
  getOption = () => {
    const {sales, inventorys} = this.state
    return {
      title: {},
      tooltip: {},
      legend: {
        data:['完成进度', '总进度']
      },
      xAxis: {
        data: ["销售部门","技术部门","生产部门","财务部门","销售部门","人力资源部门"]
      },
      yAxis: {},
      series: [{
        name: '完成进度',
        type: 'bar',
        data:sales
      }, {
        name: '总进度',
        type: 'bar',
        data: inventorys
      }]
    }
  }

  update = () => {
    const sales = this.state.sales.map(sale => sale + 1)
    const inventorys = this.state.inventorys.map(inventory => inventory -1)
    this.setState({
      sales,
      inventorys
    })
  }
  render() {
    return (
      <div>
        <Card>
          <Button type='primary' onClick={this.update}>更新</Button>
        </Card>

        <Card title='柱状图一'>
          <ReactEcharts option={this.getOption()} style={{height: 300}}/>
        </Card>
      </div>
    )
  }
}
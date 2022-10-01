import React, {Component} from 'react'
import {Card, Button} from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
后台管理的折线图路由组件
 */
export default class Line extends Component {
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
        type: 'line',
        data:sales
      }, {
        name: '总进度',
        type: 'line',
        data: inventorys
      }]
    }
  }

  getOption2 = () => {
    return {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    };

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

        <Card title='折线图一'>
          <ReactEcharts option={this.getOption()} style={{height: 300}}/>
        </Card>

        <Card title='折线图二'>
          <ReactEcharts option={this.getOption2()} style={{height: 300}}/>
        </Card>

      </div>
    )
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space } from 'antd';
import { productList } from '../../api/product';
import { Button } from 'antd';

const getTableInfo = ( page,rows ) => {
    return new Promise((resolve,reject)=>{
        productList({'page':page,'rows':rows})
        .then(response => {
            resolve(response)
        })
    })
}


class ProductManage extends Component {
    state = {
        columns:[
            {
              title: '物料代码',
              dataIndex: 'serialCode',
              key: 'serialCode',
            },
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '型号',
              dataIndex: 'model',
              key: 'model',
            },
            {
                title: '状态',
                dataIndex: 'productState',
                key: 'productState',
            },
            {
                title: '版本',
                dataIndex: 'versionLink',
                key: 'versionLink',
            },
            {
                title: '添加时间',
                dataIndex: 'addDateTime',
                key: 'addDateTime',
            },
            {
                title: '修改时间',
                dataIndex: 'modifyDateTime',
                key: 'modifyDateTime',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                  <Space size="middle">
                    <a>修改</a>
                    <a>删除</a>
                  </Space>
                ),
            },
        ],
        tableData:[],
        total:0,
        loading:false,
        
    }
  
    componentDidMount(){
        this.setState({
            loading:true
        })
        getTableInfo(1,10)
        .then(res => {
            this.setState({
                tableData:res.rows,
                loading:false,
                total:res.total
            })
        })
        
    }

    changePage(current){

    }
    //创建产品
    createProduct(){
        console.log("创建1个产品")
    }

    render() {
        const paginationProps =  {
            showSizeChanger: true,//设置每页显示数据条数
            showQuickJumper: false,
            showTotal: () => `共${this.state.total}条`,
            pageSize: this.state.pageSize,
            total: this.state.total,  //数据的总的条数
            onChange: (current) => this.changePage(current), //点击当前页码
            onShowSizeChange: (current, pageSize) => {//设置每页显示数据条数，current表示当前页码，pageSize表示每页展示数据条数
                // console.log(pageSize);
                // this.onShowSizeChange(current, pageSize)
            }
        }
        return (
            <div>
                <div style={{padding:'10px 5px'}}>
                    <Button type="primary" onClick={ () => this.createProduct()}>创建产品</Button>
                </div>
                <div>
                <Table 
                    loading={this.state.loading} 
                    columns={this.state.columns} 
                    dataSource={this.state.tableData} 
                    rowKey={columns => this.state.columns.id} 
                    pagination={paginationProps}
                />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        
    }
}
export default connect(mapStateToProps)(ProductManage)
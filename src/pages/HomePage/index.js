import { getCookies } from '../../utils/Cookie'
import React from 'react'
import { connect } from 'react-redux'
import { Table, Tag, Space } from 'antd';
import { func } from 'prop-types';

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名字',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '工号',
      dataIndex: 'serialCode',
      key: 'serialCode',
    },
    {
        title: '联系方式',
        dataIndex: 'mobile',
        key: 'mobile',
    },
    {
        title: '电子邮箱',
        dataIndex: 'eMail',
        key: 'eMail',
    },
    {
        title: '工号',
        dataIndex: 'serialCode',
        key: 'serialCode',
    },
    {
        title: '职位',
        dataIndex: 'rule',
        key: 'rule',
        render:(text, record, index)=>{
            let job = record.role.remark
            return (
                <div>{job}</div>
            )
        }
    }
  ];

  const nuserData = []
  nuserData.push(JSON.parse(getCookies(process.env.REACT_APP_TOKEN_NAME)))

class HomePage extends React.Component{
    state={
    }
    componentDidMount(){
    }
    render(){
        return (
            <div>
                <div>
                    <span>个人信息</span>
                    <div>
                        <Table columns={columns} dataSource={nuserData} rowKey={columns => columns.id} pagination={false}/>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
    return {
    }
}
export default connect(mapStateToProps)(HomePage)
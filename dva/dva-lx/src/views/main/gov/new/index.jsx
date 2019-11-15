import React from 'react';
import {connect} from 'dva';
import {Form,Input,Tooltip,Icon,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,} from 'antd';

const mapStateToProps = state=>{
  return {
    type: state.gov.type,
    info: state.gov.info
  }
}

@connect(mapStateToProps)
class NewGov extends React.Component{
  render(){
    console.log('props...', this.props);
    return <>
      <p>新增机构</p>
    </>
  }
}

export default NewGov;

import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';

class IndexPage extends React.Component{
  
  render(){
    console.log(this.props)
    let {changeNum}=this.props
    return <div>
      
      <button onClick={()=>{changeNum('+')}}>+</button>
        <span>{this.props.num}</span>
      <button onClick={()=>changeNum('-')}>-</button>
    </div>
  }
}
//props的类型检测
IndexPage.propTypes = {
  num:Number
};
//props的默认值
IndexPage.defaultProps={
  num:10000
}

const mapStateToPorps=state=>{
  console.log('state...',state)
  return {
    num:state.num.num
  }
}

const mapDispatchToProps=dispatch=>{
  console.log(dispatch)
  return {
    changeNum:type=>dispatch({
      type:'num/changeNum',
      payload:{type}
    })
  }
}


export default connect(mapStateToPorps,mapDispatchToProps)(IndexPage);

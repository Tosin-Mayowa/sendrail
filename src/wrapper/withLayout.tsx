
import React,{Component} from 'react';
import DashboardLayout  from '../Component/Dashboard/DashboardLayout'
const withLayout=Innercomponent=>{
  return  class withLayout extends Component{
    //   constructor(props){
    //       super(props);
    //   }
      render(){
          return (
            <DashboardLayout>
              <Innercomponent {...this.props} />
            </DashboardLayout>
          ) 
      }
  }
}

export default withLayout;
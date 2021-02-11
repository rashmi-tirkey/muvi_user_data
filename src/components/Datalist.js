import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { editActive } from './../action/userAction';
class Datalist extends Component {
    constructor(props){
        super(props);
        this.state = {
           pageIndex:5
        }
    }
    componentDidMount(){
        let data={
            isEdit:false
        }
        this.props.editActive(data);
    }
    edituser=(data,i)=>{
        data.index=i;
        data.isEdit=true;
        this.props.editActive(data);
        this.props.history.push("/");
    }
    
    render(){
        let data = this.props.userData;
        return(
            <div className="main-wrapper" style={{paddingBottom:"20px"}}>
                <div className="list-wrapper">
                <h2>Userlist Page</h2>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Country Name</th>
                        <th>Email Id</th>
                        <th>Profile</th>
                              
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((value, index) => {
                           if(index<this.state.pageIndex) return (
                                <tr>
                                    <td>{index}</td>
                                    <td title="Edit" onClick={()=>this.edituser(value,index)} style={{color:"blue", cursor:"pointer"}}>{value.name} </td>
                                    <td>{value.country}</td>
                                    <td>{value.email}</td>
                                    <td>
                                    <img src={value.src} style={{height:"150px"}}/>
                                    </td>
                                </tr>
                                
                            )
                        })
                           
                    }
                    </tbody>
                    </table>
                    {data.length>this.state.pageIndex?<button onClick={()=>this.setState({pageIndex:this.state.pageIndex + 5})}>load more</button>:""}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userData: state.userData
    };
};
export default connect(mapStateToProps, {editActive})(withRouter(Datalist))

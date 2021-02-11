import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class Datalist extends Component {
    constructor(props){
        super(props);
        this.state = {
           pageIndex:5
        }
    }
    render(){
        let data = JSON.parse(localStorage.getItem('Props'));
        return(
            <div className="main-wrapper">
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
                                    <td>{value.name}</td>
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

export default withRouter(Datalist);
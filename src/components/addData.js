import React, {Component} from 'react'
import {withRouter}from 'react-router-dom'
import "./addData.css"

class addData extends Component{
   constructor(props){
        super(props);
        this.state = {
            name:"",
            isName:true,
            country:"",
            isCountry:true,
            mobile:"",
            isMobile:true,
            email:"",
            isEmail:true,
            profile_image:"",
            pic:"",
            src:"",
            isData:true
        }
    }
    formchange = (data) =>{
        this.setState({isMobile:true, isEmail:true, isName:true, isCountry:true})
        this.setState({ [data.target.name]: data.target.value });
         
     }
     handlePictureSelected=(e)=>{
        let pic = e.target.files[0];
        let type=pic.type.split("/")
        if(type.length>1 && (type[1]==="jpeg" || type[1]==="jpg")){
            let src = URL.createObjectURL(pic);
            this.setState({pic, src});
        }else{
            alert("Only jpeg and jpg expecting");
        }
        
      }
     formSubmit = () => {
        let regex = /^[a-zA-Z ]{2,30}$/;
        if (!regex.test(this.state.name)){
            this.setState({isName:false})
            return true;
        }
        if (!regex.test(this.state.country)){
            this.setState({isCountry:false})
            return true;
        }
        let pattern = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        if (!pattern.test(this.state.mobile)) {
           this.setState({isMobile:false})
            return true;
        }
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!mailformat.test(this.state.email)) {
            this.setState({isEmail:false})
             return true;
         }
        if(this.state.isMobile && this.state.isEmail && this.state.src){
            this.setState({isData:false})
            let localValue={...this.state, isData:false}
            let data = JSON.parse(localStorage.getItem('Props'));
            let setLocalStorage=[]
            if(data){
                setLocalStorage=data
                setLocalStorage.push(localValue);
            }else{
                setLocalStorage.push(localValue)
            }
            localStorage.setItem('Props', JSON.stringify(setLocalStorage));
            this.props.history.push("/Datalist")
           
        }else{
            alert("somthing went wrong please check all the fields!!");
        }
     }
    render(){
        return(
            <div className="parent-wrapper">
                <h2>Add User </h2>
                <div className="form-wrapper">
                    <div className="input-wrapper">
                        <input type="text" name="name" placeholder="Name" onChange={this.formchange}/>
                        {this.state.isName?'':<p className="error-message">
                         Enter Valid Name
                    </p>} 
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="country" placeholder="Country" onChange={this.formchange}/>
                        {this.state.isCountry?'':<p className="error-message">
                         Enter Country Name
                    </p>} 
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="mobile" placeholder="Mobile Number" onChange={this.formchange}/>
                        {this.state.isMobile?'':<p className="error-message">
                         Mobile number should be 10 digits
                    </p>} 
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="email" placeholder="EmailId" onChange={this.formchange}/>
                        {this.state.isEmail?'':<p className="error-message">
                        Please enter valid emailId
                    </p>} 
                    </div>
                    <div className="input-wrapper">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={this.handlePictureSelected}
                    />  
                    </div>
                    <div className="input-wrapper">
                        <button type="submit" onClick={this.formSubmit} className="btn btn-primary" name="sub-btn" >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(addData);
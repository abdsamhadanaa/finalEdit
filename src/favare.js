import React from 'react';
import axios from "axios"
import cors from 'cors' ;
import { Link, withRouter } from "react-router-dom";
class Falist extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        fav :[]
    }
  }
  getadd(){
    axios.get("http://localhost:5000/favorite")
    .then((result) => {
       console.log(result.data);
       const fava = result.data;
       this.setState({fav:fava})
     })
     .catch((err) => {
       console.log("Error",err);
     });
  }

  render () {
    return ( 
    <div id ="zerinmidel">
        
        <button onClick = {this.getadd.bind(this)} class="favpage"> List Favorite </button>
        <Link to="/auth/Search"><button class="favpage_">HOME</button></Link><br /><br /><hr/><br />
          {this.state.fav.map((element,index)=>{ 
            return <div  key={index} id="bigDiv" >
         <div class="txt">
               Title: {element.title} <br></br> 
               Authors: {element.author}<br></br>
              publishedDate:{element.dateOfPublication}<br></br>
              </div><br />
              <div>
            <img src={element.img} alt="new" class="sora"/><br /><br />              
            <button onClick = {()=>{
                 axios.delete("http://localhost:5000/removeOne")
                .then((res) => {
                  console.log("DELETED");
                })
                .catch((err) => {
                  console.log(err);
                });
             }} class="zer"> Remove </button><br /><br /> <hr /></div>
            </div>
            
          })}
          <br />
        </div>
        
 )
}

}

export default withRouter(Falist);
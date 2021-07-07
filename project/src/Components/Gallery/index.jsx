import {Link} from "react-router-dom";
import React, { useState,useEffect } from 'react';
import experience from '../../static/images/experience.jpg';
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          uploadStatus:''
        };
      }
      componentDidMount() {
        this.GetImages();
      }
      GetImages=()=>{
        fetch(`http://localhost:32000/api/image`,{
            method:'GET',
            headers:{
                "Content-Type":'application/json charset=UTF-8',
                'Accept':'application/json, text/html',
            },
            credentials:'include',
        })
        .then(data=>data.json())
        .then((data)=>{
            this.setState({
                isLoaded: true,
                items: data.images
              });
        })
      }
      imageHandler=(event)=>{
        const file=event.target.files[0];
        const formData=new FormData()
        formData.append('image', file)
        fetch(`http://localhost:32000/api/image`,
        {
            method:'POST',
            body:formData,
            headers:{
                'Accept':'multipart/form-data',
            },
            credentials:'include',
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                uploadStatus:res.msg
              });
              this.GetImages();
        })
        .catch(error=>{
            console.error(error)
        })
    }
      render() {
        const { items } = this.state;
        return(
        <>
      <div id="callMe" className="form-1 ">
    <div className="container">
        <div className="row"> 
            <div className="col-lg-6 offset-lg-3">
                <h6> {this.state.uploadStatus} </h6>
                <h4>Share your photos:</h4>
                <input type="file" name="image" accept="image/*" multiple={false} onChange={this.imageHandler} />
                
                </div>
                </div>
               
                
                
                </div>
                </div>
    <div class="row">
    <div class="col-lg-12 col-md-12 col-xs-12">
    {
                    this.state.items.length>0 ? this.state.items.map(item=>(
                        <img
                        src={"http://localhost:32000/"+item.image}
                        class=" col-lg-4"
                        alt=""
                      />
                    )
                    ):<h3>No Images</h3>
                    
                   
                    }
                    
            </div>
                
    </div> 
    <hr/>     
      </>
        );
      }
}
export default Gallery;
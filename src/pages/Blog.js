import React from 'react'
import Navbar from '../components/Navbar'
import { PenTool, Video } from 'react-feather'
import VideoInput from './VideoInput'
function Blog() {
  const publish = ()=>{
    if(document.getElementById("w3review").value===""){
      alert("Nothing to publish. Please write your content to publish.");
    }else if (document.getElementById("w3review").value !==""){
    alert("Post published");
    document.getElementById("w3review").value ="";
    }
  }
  
  const submit = ()=>{
    if(document.getElementById("video").length === 0){
      alert("Please select a video to upload");
    }
    if (document.getElementById("video").length !== 0){
      alert("Video uploaded successfully");
    }}
  return (
    <div>
        <Navbar></Navbar>
      <img src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" width="1100px" height="500px" style={{alignContent:"center"}} alt=""></img>
            <h1 style={{textDecoration:"overline"}}>Write Your Own Blog</h1>
            <span/>
            <p style={{color:"white", fontSize:"18px"}}>Blog writing is a way of presenting your own thoughts and sharing your knowledge. Writing blogs not only helps you to teach others or help others to know many new things but also allows ou to increase your own knowledge <a style={{color:"white"}}href="https://www.infidigit.com/blog/what-is-a-blog/">Read more...</a></p>
            <label for="blogwriting"></label><PenTool></PenTool>
<textarea id="w3review" name="blogwriting" rows="4" cols="50" placeholder="What's in your mind today?"style={{borderRadius:"10px"}}></textarea>
<button type="submit" style={{alignContent:"center"}} onClick={publish}>Publish</button>
<h1 style={{textAlign:"center", textDecoration:"overline", marginTop:"100px"}}>Video Blog Section</h1>
<div id="video" style={{backgroundColor:"white"}}>
<h3>Upload your video to share message...</h3>
<VideoInput width={600} height={500} style={{backgroundcolor:"black"}} id="video" data-aos="slide-up"/>
<button type='submit' onClick={submit} style={{alignContent:"center", width:"200px"}}>Upload</button>
    </div>
    </div>
  )
}

export default Blog

import React from 'react'
import Navbar from '../components/Navbar'
function Resume() {
  return (
    <div>
        <Navbar></Navbar>
        <div class="container" id="CV-maker">
    <h1 class="text-center my-2">Create your resume here and download it to use anywhere</h1>

    <div class="row">
        <div class="col-md-6">
            <h3>Personal Information</h3>
            <div class="form-group mt-2">
                <label for="nameField">Your Name</label>
                <input type="text" id="nameField" placeholder="Enter here" class="form-control"></input>
            </div>
            <div class="form-group mt-2">
                <label for="contactField">Your Contact</label>
                <input type="text" id="contactField" placeholder="Enter here" class="form-control"></input>
            </div>
            <div class="form-group mt-2">
                <label for="addressField">Your Address</label>
                <textarea id="addressField" placeholder="Enter here" class="form-control" rows="4"></textarea>
            </div>
            <p class="text-secondary my-3">Important links</p>
            <div class="form-group mt-2">
                <label for="fbField">github profile</label>
                <input type="text" id="fbField" placeholder="Enter here" class="form-control"></input>
            </div>
            <div class="form-group mt-2">
                <label for="instaField">Instagram</label>
                <input type="text" id="instaField" placeholder="Enter here" class="form-control"></input>
            </div>
            <div class="form-group mt-2">
                <label for="linkedField">LinkedIn</label>
                <input type="text" id="linkedField" placeholder="Enter here" class="form-control"></input>
            </div>
        </div>
        <div class="col-md-6">
            <h3>Professional Details</h3>
            <div class="form-group mt-2">
                <label for=" ">Profile Summary</label>
                <textarea placeholder="Enter here" class="form-control" id="Profile Summary"></textarea>
            </div>
            <div class="form-group mt-2" id="we">
                <label for=" ">Work Experience(add at least 3)</label>
                <textarea placeholder="Enter here" class="form-control weField" rows="3"></textarea>
                <div class="container text-center mt-3" id="weAddButton">
                    <button class="btn btn-primary btn-sm">Add</button>
                </div>
            </div>
            <div className="form-group mt-2" id="eq">
                <label for=" ">Academic Qualification(10th,12th & Graduation)</label>
                <textarea placeholder="Enter here" className="form-control eqField"></textarea>
                <div className="container text-center mt-3" id="aqAddButton">
                    <button className="btn btn-primary btn-sm">Add</button>
                </div>
            </div>
            <div class="form-group mt-2" id="sk">
                <label for=" ">Skills</label>
                <textarea placeholder="Enter here" class="form-control sField"></textarea>
                <div class="container text-center mt-3" id="skAddButton">
                    <button className="btn btn-primary btn-sm">Add</button>
                </div>
            </div>
            <div className="form-group mt-2" id="hb">
                <label for=" ">Extra-curricular activities</label>
                <textarea placeholder="Enter here" className="form-control hbField"></textarea>
                <div className="container text-center mt-3" id="hbAddButton">
                    <button className="btn btn-primary btn-sm">Add</button>
                </div>
            </div>
            <div className="form-group mt-2" id="project">
                <label for=" ">Projects</label>
                <textarea placeholder="Enter here" className="form-control projectField"></textarea>
                <div className="container text-center mt-3" id="projectAddButton">
                    <button className="btn btn-primary btn-sm">Add</button>
                </div>
            </div>
        </div>
    </div>
    <div className="container text-center mt-3">
        <button className="btn btn-primary btn-lg">Generate CV</button>
    </div>
</div>

    </div>
  )
}

export default Resume

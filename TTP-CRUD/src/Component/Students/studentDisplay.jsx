import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { getStudentData } from "../../Actions/studentAction";
// import axios from "axios";

class StudentDisplay extends Component {
    
    render() {
        return(
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.campus_id}
                </p>
            </div>
        );
    }
}

export default StudentDisplay;
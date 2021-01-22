import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudentData } from "../../Actions/studentAction";
import axios from "axios";
import StudentDisplay from './studentDisplay';

class Students extends Component {
    constructor(){
        super();

        this.state={
            name: "",
            campus_id: 0,
            gpa: 0,
            studenturl: "",
        };
    }

    async componentDidMount() {
        console.log("render");
        await this.props.getStudentData();
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleSendInfo = () => {
        axios
            .post("http://localhost:5000/school/", this.state)
            .then(function(response) {
                console.log(response);
            });
        console.log("Got INFO");
    };

    handleDeleteInfo = (id)=> {
        axios.delete(`http://localhost:5000/school/${id}`);
    };

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value,
        });
    };

    handleUpdateInfo = (id) => {
        axios
            .put(`http://localhost:5000/school/${id}`, this.state)
            .then(function (response){
                console.log(response);
            });
    };



    render() {
        return (
        <div>
            {this.props.StudentInfo.map((student) => {
                return (
                    <StudentDisplay name={student.name} 
                    campus_id={student.campus_id}/>
                )
            })}
        </div>);
    }
}

const mapStateToProps = function (state) {
    console.log(state.studentReducer);
    return{
        StudentInfo: state.studentReducer.students,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getStudentData: () => dispatch(getStudentData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);

/* <form onSubmit={this.handleSubmit}> 
                <label>Student Name:</label>
                <input
                    name="name"
                    value={this.state.name}
                    onChange= {this.handleChange}
                ></input>
                <label>Campus ID:</label>
                <input
                    name="campus_id"
                    value={this.state.campus_id}
                    onChange= {this.handleChange}
                ></input><label>Student GPA:</label>
                <input
                    name="gpa"
                    value={this.state.gpa}
                    onChange= {this.handleChange}
                ></input><label>Student URL:</label>
                <input
                    name="studenturl"
                    value={this.state.studenturl}
                    onChange= {this.handleChange}
                ></input>
                <button onClick={this.handleUpdateInfo}>Submit</button>

            </form> */
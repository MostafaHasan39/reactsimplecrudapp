import React,{Component} from 'react';

class CourseForm extends Component{
    submitCourse=(e)=>{
        e.preventDefault();
        if(e.target.courseTitle.value){
            this.props.addCourse(e.target.courseTitle.value);
            e.target.courseTitle.value="";
        }

    }
    render(){
        return(
            <form onSubmit={this.submitCourse}>
                <input type="text" placeholder="Enter course title..." name="courseTitle"></input>
                <button type="submit">Add Course</button>
            </form>
        )
    }
}
export default CourseForm;



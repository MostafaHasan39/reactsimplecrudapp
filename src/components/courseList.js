import React,{Component} from 'react';

class CourseList extends Component{

    state={
        editCourseMode:false,
        title:this.props.course.name
    }

    changeTitle=(e)=>{
        this.setState({title:e.target.value});
    }

    submitChange=(e)=>{
        e.preventDefault();
        this.props.updateCourse(this.props.index,this.state.title);
        this.toggleView();
        
    }

    listCourses=()=>{
        return <li>
        <span>{this.props.course.name}</span>
        <button onClick={()=>{this.toggleView()}}>Edit</button> 
        <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete</button>
        </li>
    }

    showForm=()=>{
        return <form onSubmit={this.submitChange}>
                <input type="text" value={this.state.title} onChange={this.changeTitle}></input>
                <button type="submit">Submit</button>
            </form>
    }

    toggleView=()=>{
        this.setState({editCourseMode:!this.state.editCourseMode});
    }
    render(){
        return this.state.editCourseMode? this.showForm():this.listCourses();
    }  
}


export default CourseList;

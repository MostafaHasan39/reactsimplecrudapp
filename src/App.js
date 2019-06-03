import React,{Component} from 'react';
import CourseForm from './components/courseForm'
import CourseList from './components/courseList'

class App extends Component {

  state={
    courses:[]
  }


  //Addcourse
   addCourse=(courseName)=>{
     let courses=this.state.courses;
     courses.push({
       name:courseName
     })
     this.setState({courses:courses});

  }

  //Deletecourse
  deleteCourse=(index)=>{
    let courses=this.state.courses;
    courses.splice(index,1);
    this.setState({courses});
  }

  //Updatecourse
  updateCourse=(index,content)=>{
    let courses=this.state.courses;
    courses[index].name=content;
    this.setState({courses});
  }

  renderItems=()=>{
    const courses=this.state.courses.map((course,index)=>{
      return <CourseList course={course} key={index} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse} index={index}/>
    });
    return <ul>{courses}</ul>
  }

  renderNoItem=()=>{
    return <li>You have no items to show</li>
  }


  render() {
    return (
    <div className="App">
    <h2>Add new course</h2>
      <CourseForm addCourse={this.addCourse}/>
      {this.state.courses.length===0 ? this.renderNoItem():this.renderItems()}
     </div> 
    )
  }
}

export default App;

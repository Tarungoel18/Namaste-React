import React from "react"
class UserClass extends React.Component{
  constructor(props)
  {
    super(props) 
    console.log(this.props.name+" constructor")
    
    this.state={
      count:1
    }
    

  }
  componentDidMount(){
    console.log(this.props.name+"mount")
  }
  render(){
    console.log(this.props.name+"Rendere called")
    const{name,location} = this.props
    return(
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={(e) => {
        // console.log(e)
        this.setState({
          count:this.state.count+1
        })
      }}>Click Me</button>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>Developer</h2>
      </div>
      
    )
  }
}

export default UserClass;
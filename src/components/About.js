import UserClass from "./UserClass"

const About=()=> {
  return (
    <div>
    <h1>About Us</h1>
    <UserClass name={"First"} location={"Ghaziabad"}/> 
       <UserClass name={"Second"} location={"Ghaziabad"}/>
       <UserClass name={"Thisrd"} location={"Ghaziabad"}/>


    </div>
  )
}

export default About
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class ReactState extends React.Component{
//   constructor(){
//     super();
//     this.state = {content:'Welcome to my website'};
//   }
//   render(){
//     return <h1>{this.state.content}</h1>
//   }
// }
// ReactDOM.render(<ReactState />,document.getElementById('root'))

// class ReactState extends React.Component{
//   constructor(){
//     super()
//     this.state = {content:'welcome to my website',website:'www.paramesh.com'}
  
//   }
//   render(){
//     return<h1>{this.state.content},{this.state.website}</h1>
// }
// }
// ReactDOM.render(<ReactState />,document.getElementById('root'))


// class ReactState extends React.Component{
//   constructor(){
//     super(); 
//     this.state={
//       content:'welcome to my website',
//     }
// }
// changeVal =()=>{
//   this.setState({content:'welcome to my website, this is a new value'})
// }
// render(){
//   return(
//     <div>
//       <h1>{this.state.content}</h1>
//       <button type="button" onClick={this.changeVal}>Change</button>
//     </div>
//   )
// }
// }
// ReactDOM.render(<ReactState />,document.getElementById('root'))

// class ReactState extends React.Component{

//   render(){
//     return(
//       <h1>
//         welcome{this.props.website}
//       </h1>
//     )
//   }
// }
// ReactDOM.render(<ReactState website=' to my website'/>,document.getElementById('root'));

// class ReactState extends React.Component{

//   render(){
//     return(
//       <h1>
//         welcome{this.props.website},{this.props.new}
//       </h1>
//     )
//   }
// }
// ReactDOM.render(<ReactState website=' to my website' new='I am paramesh'/>,document.getElementById('root'));

// const MyWebsite=['Home','About Us','Services','Products','Contact us']
// const websiteMenu =MyWebsite.map((x)=>{
//   return <li>{x}</li>
// })
// class ReactState extends React.Component{
//   render() {
//     return(
//       <div>
//         <ul>{websiteMenu}</ul>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<ReactState/>,document.getElementById('root'))

// function Welcome(){
//   const[count,setCount] = useState(1);
//   return(
//     <div>
//       <p>click {count} times</p>
//       <button onClick = {()=> setCount(count+1)}>Click Here</button>
//     </div>
//   );
// }
// ReactDOM.render(<Welcome/>,document.getElementById('root'));  //jsx is used to render the react

// function Examplerender(){
//   const[count,setCount] = useState(0);
//   // step3
//   useEffect(()=>{
//     setTimeout(()=>{
//   setCount(count => count + 1)},4000)
//     });
// // step2
//   return(
//     <h1>website counting details {count} times </h1>
//   );
// }


function UserDemo(){
  const[user,setUser] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
      setUser(data);
      setLoading(false);
    })  
    .catch(error=>{
      console.error("diff if it is not loadin,will be array msg");
      setLoading(false);
    })
  },[]);
  if(loading){
    return<p>loading</p>;
 }
 return(
  <div>
    <h1>
      list out the users in API
    </h1>
    <ul>
      {user.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
 );
}

ReactDOM.render( <UserDemo />,document.getElementById('root'));  //jsx is used to render the react
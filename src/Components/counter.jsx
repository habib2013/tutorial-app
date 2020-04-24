import React, { Component } from 'react';
class Counter extends Component {
   state = { 
      count : 0,
    }
   render() { 
      return ( 
         <div>
         <p className="badge badge-danger">  {this.myIncrement()}</p> 
         </div>
       );
   }

   myIncrement(){
      const {count} =  this.state;
      return count === 0 ? <h1>Zero</h1> : count; 
   }
}
 
export default Counter;
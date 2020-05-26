import React, { Component } from 'react';
class Counter extends Component {

dohandleIncrement =() => {
   this.myBtnIncrement({id:1});
}


   render() { 

      return ( 
         <div>
      
         <p className={this.getBadgeClasses()}>  {this.myIncrement()}</p> 
         <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary">+</button>
         <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-warning" disabled={(this.props.counter.value === 0) ? 'disabled': ''} >-</button>
        
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> <i className="fa fa-trash"></i></button>
   
         </div>
       );
   }

 

   getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += (this.props.counter.value === 0) ? 'danger' : 'primary';
      return classes;
   }

   // getStatus(){
   //    const {value} = this.props.counter;
   //    console.log(value);
   //     let status = "btn btn-warning";
   //     status += (value.lenght > 0) ? '' : ' disabled';
   //     return value;
   // }

   myIncrement(){
      const {value: count} =  this.props.counter;
      return count === 0 ? <h1>Zero</h1> : count; 
   }
}
 
export default Counter;
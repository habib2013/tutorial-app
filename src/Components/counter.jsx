import React, { Component } from 'react';
class Counter extends Component {
   state = { 
      count : 5,
      tags:['tag1','tag2','tag3']
    };
// handleIncrement(){
//    console.log("Increment Clicked")
// }
myBtnIncrement = product => {
   // console.log("Increment Clicked",this);
   console.log(product)
   this.setState({count: this.state.count + 1});
} 

dohandleIncrement =() => {
   this.myBtnIncrement({id:1});
}



    renderTags(){
       if(this.state.tags.length === 0) return <p>There are no Tags</p>;
       return <ul> 
       {this.state.tags.map(tag => 
          <li key={tag}>{ tag }</li>
       )}
      </ul>
    }
   render() { 
    
      return ( 
         <div>
         <p className={this.getBadgeClasses()}>  {this.myIncrement()}</p> 
         <button onClick={() => this.myBtnIncrement({id:1})} className="btn btn-primary">Increment</button>
        
        {this.state.tags.length === 0 && 'Please Create a new Tag'}
        {this.renderTags()}
         </div>
       );
   }



   getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += (this.state.count === 0) ? 'danger' : 'primary';
      return classes;
   }

   myIncrement(){
      const {count} =  this.state;
      return count === 0 ? <h1>Zero</h1> : count; 
   }
}
 
export default Counter;
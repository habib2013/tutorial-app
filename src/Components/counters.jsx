import React, { Component } from 'react';


class Counters extends Component {
   state = { 
      count: 0,
      tags: [],
    }

    getClassColor = () => {
      let classes = 'm-2 badge badge-';
      classes += this.state.count === 0 ? 'warning' : 'info';
      return classes;
      }
      
         countState = () => {
            return (this.state.count === 0) ? 'Zero' : this.state.count;
         }

         renderTags = () => {
            return (this.state.tags.length === 0) ? <p>There are No Tags</p> : <ul>
            {this.state.tags.map(item => <li>item</li>)}
            </ul>
         }
handleClick = () => {
this.setState({count: this.state.count + 1});
}


   render() { 
      return (
        
<div className="container">
<span className={this.getClassColor()}>{this.countState()}</span>
<button className="btn btn-primary" onClick={this.handleClick}>Increment</button>

      <span>{this.state.tags.length === 0 && 'Please create a new tag'}</span>
      <div>{this.renderTags()}</div>

   </div>

      );
   }


}
 
export default Counters;
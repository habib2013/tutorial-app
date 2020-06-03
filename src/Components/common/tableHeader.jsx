import React, { Component } from 'react';

class TableHeader extends Component {
   raiseSort = path => {
      const sortColumn = {...this.props.sortColumn}; //clone the existing sort column
      //  console.log(sortColumn.path);
         if(sortColumn.path === path) // if exisiting path is same as path passed
         {
                  // thhen the new sortcolum order shpould be this
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
         }
         else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
         }
         this.props.onSort(sortColumn);
   }

   render() { 
      return ( <thead>
         <tr>
      { this.props.columns.map(column =>  <th key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>{column.label}</th>)}
         </tr>
      </thead> );
   }
}
 
export default TableHeader;
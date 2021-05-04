import React, { Component } from 'react';
class Itemsdisplay extends Component {
    
    render() { 
        return (
            <ul>
            {
                this.props.items.map(item=>(<li key={item.if}>{item.text}</li>))
            }
            </ul>
          );
    }
}
 
export default Itemsdisplay;
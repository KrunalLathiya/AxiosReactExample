import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.port}
          </td>
        </tr>
    );
  }
}

export default TableRow;
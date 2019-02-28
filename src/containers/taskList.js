import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskItem from './taskItem';
import { Alert } from 'react-bootstrap';

class TaskList extends Component {

    render(){

        if (this.props.completeOBJ.productInventory.length === 0) {
            return(<Alert bsStyle="danger"><strong>Error:</strong> No inventory is found! </Alert>)
        }

        return(
            <div className="row">
                <div className="list-group">
                    {this.props.completeOBJ.productInventory.map((item,i) => 
                        <TaskItem key={i} value={item} />
                    )}
                </div>
                <br /><br /><br /><br /><br />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    completeOBJ: state.CartReducer
})


export default connect(mapStateToProps, null)(TaskList);
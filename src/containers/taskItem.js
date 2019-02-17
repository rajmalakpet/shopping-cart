import React, { Component } from 'react';
import { ADD_CART } from './../actions/actionCreators';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class TaskItem extends Component {

    constructor(props){
        super(props)
        this.state = this.props.value
    }

    handleClick = () => {
        console.log('handleClick id value: '+this.props.value.id);
        this.props.add(this.props.value);
    }

    render(){
        return(
            <div className="list-group-item">
                <p>Product: <strong>{this.props.value.title}</strong></p>
                <p>Price (Rs.): <strong>{this.props.value.price}</strong></p>
                <p>Remaining Inventory: <strong>{this.props.value.inventory}</strong></p>
                <Button bsStyle="success" disabled={this.props.value.inventory === 0} onClick={this.handleClick}> Add to Cart</Button>
                <span className="text-danger"><strong> {this.props.value.inventory === 0 ? 'No more Items left in Inventory' : ''}</strong></span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispath) => ({
    add: (item) => {dispath(ADD_CART(item))}
})

export default connect(null, mapDispatchToProps)(TaskItem);
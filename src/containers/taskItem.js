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
               <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <p>Product: <strong>{this.props.value.title}</strong></p>
                        <p>Price ($-USD): <strong>{this.props.value.price}</strong></p>
                        <p>Remaining Inventory: <strong>{this.props.value.inventory}</strong></p>
                        <Button className="customBtn" bsStyle="success" disabled={this.props.value.inventory === 0} onClick={this.handleClick}> Add to Cart</Button>
                        <span className="text-danger"><strong> {this.props.value.inventory === 0 ? 'No more Items left in Inventory' : ''}</strong></span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src={this.props.value.imgURL} style={{height:'250px'}} alt="opps.."/>
                    </div>
               </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispath) => ({
    add: (item) => {dispath(ADD_CART(item))}
})

export default connect(null, mapDispatchToProps)(TaskItem);
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getUniqueItems } from './../actions/actionCreators';
import { Alert, Button } from 'react-bootstrap';
import Countdown from 'react-countdown-now';

class Checkout extends Component {

    render(){

        const formattedArr = getUniqueItems(this.props.completeOBJ.cartList);
        console.log('<=== render():unique items in formattedArr: ',formattedArr);

        if (this.props.completeOBJ.cartList.length === 0) {
            return (<Alert bsStyle="danger"><strong>Note:</strong> Your Cart is empty. No items to Checkout. Continue shopping <NavLink activeClassName='is-active' to='/shopping'>Awesome Deals</NavLink></Alert>)
        }

        let _grandTotal = 0;
        formattedArr.map((item,i) => 
            _grandTotal = _grandTotal + item.price * item.inventory
        )
    
        return(
            <div>
                <div className="row">
                    <span className="pull-right" style={{color:'#ac1a17'}}>Please finish this transaction in: <strong><Countdown date={Date.now() + 120000} /></strong></span>
                    <NavLink activeClassName='is-active' className="pull-left" to='/shopping'><span className="glyphicon glyphicon-chevron-left"></span> Continue Shopping ...</NavLink>
                </div>
                <br />
                <div className="row">
                    <div className="alert alert-success text-center" style={{backgroundColor:'#000',color:'#fff'}}><span className="glyphicon glyphicon-shopping-cart"></span> CheckOut Summary</div>
                    <div className="list-group">
                        {formattedArr.map((item,i) => 
                            <div key={i} className="list-group-item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <p>Product: <strong>{item.title}</strong></p>
                                        <p>Price ($-USD): <strong>{item.price}</strong></p>
                                        <p>Quantity Selected: <strong>{item.inventory}</strong></p>
                                        <p>Total - Price x Quantity: <span className="text-primary"><strong>{item.price * item.inventory}</strong></span></p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <img src={item.imgURL} style={{height:'250px'}} alt="opps..."/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h5><strong>Grand Total ($-USD): <span className="text-primary">{_grandTotal}</span></strong></h5>
                        <Button bsStyle="success" className="customBtn pull-right" disabled>Proceed to Payment</Button>
                    </div>
                    <br /><br /><br /><br /><br />
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    completeOBJ: state.CartReducer
})

export default connect(mapStateToProps, null)(Checkout);
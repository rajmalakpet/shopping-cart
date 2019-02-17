import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getUniqueItems } from './../actions/actionCreators';
import { Alert, Button } from 'react-bootstrap';

class Checkout extends Component {

    render(){

        const formattedArr = getUniqueItems(this.props.completeOBJ.cartList);
        console.log('<=== render():unique items in formattedArr: ',formattedArr);

        if (this.props.completeOBJ.cartList.length === 0) {
            return (<Alert bsStyle="danger"><strong>Note:</strong> Your Cart is empty. No items to Checkout.</Alert>)
        }

        let _grandTotal = 0;
        formattedArr.map((item,i) => 
            _grandTotal = _grandTotal + item.price * item.inventory
        )
    
        return(
            <div className="row">
                <br />
                <div className="alert alert-success text-center"><span className="glyphicon glyphicon-shopping-cart"></span> CheckOut Summary</div>
                <div className="list-group">
                    {formattedArr.map((item,i) => 
                        <div key={i} className="list-group-item">
                            <p>Product: <strong>{item.title}</strong></p>
                            <p>Price (Rs.): <strong>{item.price}</strong></p>
                            <p>Quantity Selected: <strong>{item.inventory}</strong></p>
                            <p>Total - Price x Quantity: <span className="text-primary"><strong>{item.price * item.inventory}</strong></span></p>
                        </div>
                    )}
                </div>
                <div>
                    <h5><strong>Grand Total (Rs.): <span className="text-primary">{_grandTotal}</span></strong></h5>
                    <Button bsStyle="success" className="pull-right">Proceed to Payment</Button>
                </div>
                <br /><br /><br /><br /><br />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    completeOBJ: state.CartReducer
})

export default connect(mapStateToProps, null)(Checkout);
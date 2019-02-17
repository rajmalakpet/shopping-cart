import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Cart extends Component {

    render(){
        return(
            <div>
                <span className="glyphicon glyphicon-shopping-cart"></span>
                <span> Cart <span className="badge">{this.props.completeOBJ.cartList.length}</span></span>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    completeOBJ: state.CartReducer
})

export default connect(mapStateToProps, null)(Cart);
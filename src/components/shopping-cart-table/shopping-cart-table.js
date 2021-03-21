import React from "react";
import './shopping-cart-table.css';
import {connect} from "react-redux";
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart
} from '../../actions';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
            const { id, title, count, total } = item;
            return (
                <tr key={id}>
                    <td>{idx + 1}</td>
                    <td>{ title }</td>
                    <td>{count}</td>
                    <td>${total}</td>
                    <td>
                        <button
                            onClick={() => onDelete(id)}
                            className="btn btn-outline- btn-sm float-right">
                            <i className="fa fa-trash" />
                        </button>
                        <button
                            onClick={() => onIncrease(id)}
                            className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button
                            onClick={() => onDecrease(id)}
                            className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </td>
                </tr>
            );
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr key='0'>
                        <td>#</td>
                        <td>Title</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps =  {
        onIncrease: bookAddedToCart,
        onDecrease: bookRemovedFromCart,
        onDelete: allBookRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);

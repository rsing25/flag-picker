import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";

class BookList extends Component {
    renderList() {
    return this.props.books.map(book => {
    return (
        <li
        key={book.title}
        onClick={() => {
        this.props.onSelectBook(book);
        }}
        className="list-group-item"
        >
        {book.title}
        </li>
    );
    });
    }

render() {
    return <ul className="list-groupb col-sm-4"> {this.renderList()}</ul>;
}
}

export const mapStateToProps = state => {
    console.log(JSON.stringify(state.books));
    return {
    books: state.books
    };
};

export const mapDispatchToProps = dispatch => {
    return {
    onSelectBook: options => {
    dispatch(selectBook(options));
    }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
    render() {
        if (this.props.book == null) {
        return <div>Select a Book to Started</div>;
        }
        return (
            <div>
            <h3> Book Details </h3>
            <div>Title {this.props.book.title}</div>
            <div>Pages {this.props.book.pages}</div>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
    book: state.activeBook
    };
};

export default connect(mapStateToProps)(BookDetail);

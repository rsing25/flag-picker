import React, { Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";
import AutoSuggest from "./autosuggest";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center",
	margin:"0 auto"
};

export default class App extends Component {
render() {
	return (
		<div style={styles}>
			<AutoSuggest />
			<BookList />
			<BookDetail />
		</div>
	);
}
}

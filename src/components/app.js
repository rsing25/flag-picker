import React, { Component } from "react";
import AutoSuggest from "./autosuggest";
import connect from "react-redux";
import { getCountryData } from "../actions/index";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center",
	margin:"0 auto"
};

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}	
	render() {
		return (
			<div style={styles}>
				<AutoSuggest  type= "checkbox"/>
			</div>
		);
	}
}


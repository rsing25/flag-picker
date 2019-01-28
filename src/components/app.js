import React, { Component } from "react";
import AutoSuggest from "./autosuggest";
import  ContinentList  from "../containers/continent-list";
import CountryList from "../containers/country-list";

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
				<ContinentList />
				<CountryList />
			</div>
		);
	}
}


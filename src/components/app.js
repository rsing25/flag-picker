import React, { Component } from "react";
import AutoSuggest from "./autosuggest";
import  ContinentList  from "../containers/continent-list";
import CountryList from "../containers/country-list";
import FlagDetail from "../containers/flag-detail";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}	
	render() {
		return (
			<div className="base-container">
				<h1 className="pageheading">Flag Picker</h1>
				<p>This app will help you to learn flags around the world in <u>3 steps</u></p>
				<div className="flex-container">
					<ContinentList />
					<CountryList />
					<FlagDetail />
				</div>
			</div>
		);
	}
}


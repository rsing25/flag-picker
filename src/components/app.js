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
			<div>
				<h1>Flag Picker</h1>
				<h2>This app will help you to learn flags around the world in 3 steps</h2>
				<div className="flex-container">
					<ContinentList />
					<CountryList />
					<FlagDetail />
				</div>
			</div>
		);
	}
}


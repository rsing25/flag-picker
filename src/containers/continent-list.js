import React, { Component } from "react";
import { connect } from "react-redux";
import { selectContinent } from "../actions/index";
import AutoSuggest from "../components/autosuggest";



class ContinentList extends Component {

render() {
    const data = this.props.continents.map( (arrVal, index) => {
        return arrVal.continent
    });

    return (
    <div><AutoSuggest type="normal" data= {data}/></div>
    );
}
}

export const mapStateToProps = state => {
    console.log(JSON.stringify(state.activeContinent));
    return {
        continents: state.continents,
        activeContinent: state.activeContinent
    };
};

export const mapDispatchToProps = dispatch => {
    return {
    selectContinent: options => {
         dispatch(selectContinent(options));
    }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);

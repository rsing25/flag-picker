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
        <div><AutoSuggest type="normal" data= {data} onChange = {this.onChangeContinent.bind(this)}/></div>
        );
    }

    onChangeContinent(continent)  {
        console.log("onChangeContinent"+continent);
        this.props.onSelectContinent({continent:continent});
    }
}



export const mapStateToProps = state => {
    console.log("mapStateToProps"+ JSON.stringify(state.activeContinent));
    return {
        continents: state.continents,
        activeContinent: state.activeContinent
    };
};

export const mapDispatchToProps = dispatch => {
    return {
    onSelectContinent: options => {
         dispatch(selectContinent(options));
    }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);

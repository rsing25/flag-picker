import React, { Component } from "react";
import { connect } from "react-redux";
import { selectConuntry } from "../actions/index";
import AutoSuggest from "../components/autosuggest";



class ContinentList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if(!this.props.activeContinent.continent  || this.props.activeContinent == null) {
            return null;
        }
        console.log("activeContinent--"+JSON.stringify(this.props.activeContinent));
        const data = this.props.continents.filter( (arrVal, index) => {
            return this.props.activeContinent.continent === arrVal.continent;
        });
        const dataIn = data[0].countries.map((country)=>{
            return country.name;
        });
        return (
        <div><AutoSuggest type="checkbox" data= {dataIn} onChange = {this.onChangeConuntry.bind(this)}/></div>
        );
    }

    onChangeConuntry(conuntry)  {
        console.log("onChangeConuntry"+conuntry);
        this.props.onSelectConuntry({conuntry:conuntry});
    }
}



export const mapStateToProps = state => {
    console.log("mapStateToProps -"+ JSON.stringify(state));
    return {
        continents: state.continents,
        countries: state.countries,
        activeContinent: state.activeContinent
    };
};

export const mapDispatchToProps = dispatch => {
    return {
    onSelectConuntry: options => {
         dispatch(selectConuntry(options));
    }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);

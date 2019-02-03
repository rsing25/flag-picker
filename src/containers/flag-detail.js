import React, { Component } from "react";
import { connect } from "react-redux";
import { selectConuntry } from "../actions/index";
import AutoSuggest from "../components/autosuggest";

class FlagDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if(!this.props.countries  || this.props.countries == null) {
            return null;
        }        
        return(
            <div>
                <ul>
                    {this.renderCountries(this.props.countries)}
                </ul>
            </div>
        )
    }

    renderCountries(countries) {
        return countries.map((country)=> {
            return (<li>{country.conuntry}</li>);
        });
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
export default connect(mapStateToProps, mapDispatchToProps)(FlagDetail);


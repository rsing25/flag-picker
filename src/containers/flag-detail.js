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
        if(!this.props.activeContinent.continent  || this.props.activeContinent == null) {
            return null;
        }
        debugger;
        const data = this.props.continents.filter( (arrVal, index) => {
            return this.props.activeContinent.continent === arrVal.continent;
        });

        const dataIn = data[0].countries.filter((country)=>{
            return this.props.countries.indexOf(country.name) !== -1;
        });

        const flagIn = dataIn.map((country)=>{
            return country.flag;
        });
        
        return(
            <div>
                <div className="text-1">Selected flags:</div>
                <div className="text-2">flags</div>
                <div>
                    <ul>
                        {this.renderFlags(flagIn)}
                    </ul>
                </div>
            </div>
        )
    }

    renderFlags(flags) {
        return flags.map((flag)=> {
            return (<span>{flag}</span>);
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


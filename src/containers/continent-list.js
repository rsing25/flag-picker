import React, { Component } from "react";
import { connect } from "react-redux";
import { selectContinent, clearConuntry } from "../actions/index";
import AutoSuggest from "../components/autosuggest";

class ContinentList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = this.props.continents.map( (arrVal, index) => {
            return arrVal.continent
        });
        return (
            <div>
                <div className="text-1">Step 1</div>
                <div className="text-2">Select a continent</div>
                <div><AutoSuggest type="normal" data= {data} onChange = {this.onChangeContinent.bind(this)}/></div>
                <div>
                    {this.renderSelectedContinent()}
                </div>
            </div>
        );
    }

    renderSelectedContinent() {
        if(!this.props.activeContinent.continent  || this.props.activeContinent == null) {
            return null;
        } else {
            return (
                <div>
                    <div className="text-2">You selected</div>
                    <div className="text-1">{this.props.activeContinent.continent}</div>
                </div>
            )
        }
    }
    onChangeContinent(continent)  {
        if(continent !== this.props.activeContinent.continent) {
            this.props.onClearConuntry({});
            this.props.onSelectContinent({continent:continent});    
        }        
    }
}

export const mapStateToProps = state => {
    return {
        continents: state.continents,
        activeContinent: state.activeContinent
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        onSelectContinent: options => {
            dispatch(selectContinent(options));
        },
        onClearConuntry: options => {
            dispatch(clearConuntry(options));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);

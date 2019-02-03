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
                    <div>You selected</div>
                    <div>{this.props.activeContinent.continent}</div>
                </div>
            )
        }
    }
    onChangeContinent(continent)  {
        console.log("onChangeContinent"+continent);
        this.props.onClearConuntry({});
        this.props.onSelectContinent({continent:continent});
        
    }
}



export const mapStateToProps = state => {
    console.log("mapStateToProps"+ JSON.stringify(state));
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

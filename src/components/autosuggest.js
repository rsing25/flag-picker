import React, {Component} from 'react';

export default class Autosuggest extends Component {

    constructor(props) {
        super(props);
        this.state = {};    
        this.state.testArr  = ["Albania","Algeria","Andorra","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
        this.state.autoIn = "";

    }

    onInputChange(e) {
        this.setState({autoIn: e.target.value});
    }
    
    renderList() {
        const autoIn = this.state.autoIn;
        const filterdArr = this.state.testArr.filter( (arrVal, index) => {
            return arrVal.substr(0,  autoIn.length).toUpperCase() == autoIn.toUpperCase();
        });

        return filterdArr.map( (arrVal, index) => {
            return (<div key= {index}>{arrVal}</div>);
        });
    }
    
    render() {
        return(
        <div className="list-groupb col-sm-4" >
            <input type="text"  onChange = {this.onInputChange.bind(this)} value = {this.state.autoIn}/>
            <div className = "autocomplete-items">
                {this.renderList()}
            </div>
        </div>
        );
    }

}
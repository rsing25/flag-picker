import React, {Component} from 'react';

export default class Autosuggest extends Component {

    constructor(props) {
        super(props);
        this.state = {autoIn:"", showMenu:false};    

    }

    onInputChange(e) {
        this.setState({autoIn: e.target.value, showMenu: true});
        if(this.props.data.indexOf(e.target.value) !== -1) {
            this.setState({autoIn: "", showMenu: false});
            this.props.onChange(e.target.value);
        }

    }

    onListItemChange(arrVal) {
        this.setState({autoIn: arrVal, showMenu: true});
        if(this.props.data.indexOf(arrVal) !== -1) {
            this.setState({autoIn: "", showMenu: false});
            this.props.onChange(arrVal);
        }
    }
    
    renderList() {
        const autoIn = this.state.autoIn;
        const showMenu = this.state.showMenu;
        if( !showMenu && (autoIn === null || autoIn === "" || this.props.data.indexOf(autoIn) != -1) ) {
            return (<div></div>);
        }
        return (<div className = "autocomplete-items"> {this.returnMenuItem()}</div>);
    }

    returnMenuItem() {
        const autoIn = this.state.autoIn;

        const filterdArr = this.props.data.filter( (arrVal, index) => {
            return arrVal.substr(0,  autoIn.length).toUpperCase() == autoIn.toUpperCase();
        });

            return filterdArr.map( (arrVal, index) => {
                if(this.props.type == "checkbox") {
                    return (<div  key= {index} className="autocompleteCheckbox" ><input  type= "checkbox" onClick = {this.onListItemChange.bind(this,arrVal)}></input>{arrVal}</div>);
                } else {
                    return (<div key= {index} onClick = {this.onListItemChange.bind(this,arrVal)}>{arrVal}</div>);
                }
            });
        
        
    }
    
    render() {
        return(
        <div className="list-groupb col-sm-4" >
            <input type="text"  onChange = {this.onInputChange.bind(this)} value = {this.state.autoIn}/>
            <div>
                {this.renderList()}
            </div>
        </div>
        );
    }

}
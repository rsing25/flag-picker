import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export default class Autosuggest extends Component {

    constructor(props) {
        super(props);
        this.state = {autoIn:"", showMenu:false};
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick.bind(this), false);
    }

    componentWillUnMount() {
        document.removeEventListener('mousedown', this.handleClick.bind(this), false);
    }

    onAutoInputUpdate(e) {
        this.setState({autoIn: e.target.value, showMenu: true});
        // if(this.props.data.indexOf(e.target.value) !== -1) {
        //     if(this.props.type == "checkbox") {
        //         this.setState({autoIn: ""});
        //     } else {
        //         this.setState({autoIn: "", showMenu: false});
        //     }            
        //     this.props.onChange(e.target.value);
        // }

    }

    handleClick = e => {
        if(ReactDOM.findDOMNode(this).contains(e.target)) {
            return;
        } else {
            this.setState({ showMenu: false});
        }
    }

    onListItemUpdate(arrVal) {
        this.setState({autoIn: arrVal, showMenu: true});
        if(this.props.data.indexOf(arrVal) !== -1) {
            if(this.props.type == "checkbox") {
                this.setState({autoIn: ""});
            } else {
                this.setState({autoIn: "", showMenu: false});
            }
            this.props.onChange(arrVal);
        }
    }
    
    renderList() {
        const autoIn = this.state.autoIn;
        const showMenu = this.state.showMenu;
        if(!showMenu) {
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
                return (<div  key= {index} className="autocompleteCheckbox" >
                <input  type= "checkbox" onClick = {this.onListItemUpdate.bind(this,arrVal)}  ></input>{arrVal}</div>);
            } else {
                return (<div key= {index} onClick = {this.onListItemUpdate.bind(this,arrVal)}  >{arrVal}</div>);
            }
        });  
    }

    
    render() {
        return(
        <div>
            <input type="text"  
                    onChange = {this.onAutoInputUpdate.bind(this)} 
                    onFocus = {this.onAutoInputUpdate.bind(this)} 
                    value = {this.state.autoIn}
                    ref={this.setTextInputRef} />
            <div>
                {this.renderList()}
            </div>
        </div>
        );
    }

}
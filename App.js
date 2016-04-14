import React from 'react';
import ReactDOM from 'react-dom';

// Class component with state.
class App extends React.Component{
    constructor() {
        super();
        this.state = { txt: 'this is the state text'}
        this.update = this.update.bind(this)
    }
    update(e) {
      this.setState({txt: e.target.value})
    }
    render(){
        let txt = this.props.txt
        return (
            <div>
            <Widget txt={this.state.txt} update={this.update}/>
            <Widget txt={this.state.txt} update={this.update}/>
            <Widget txt={this.state.txt} update={this.update}/>
            <Widget txt={this.state.txt} update={this.update}/>
            </div>
        );
    }
}


////statesless component
//const App = () => <h1> Hello Eggheads</h1>

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is the default txt'
}

const Widget = (props) => {
    return (
        <div>
            <input type="text"
            onChange={props.update}/>
           <h1>{props.txt}</h1>
        </div>
    )
}

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';

// Class component with state.
class App extends React.Component{
    constructor() {
        super();
        this.state = { txt: 'this is the state text'}
    }
    update(e) {
      this.setState({txt: e.target.value})
    }
    render(){
        let txt = this.props.txt
        return (
            <div>
            <input type='text' onChange={this.update.bind(this)} />
            <h1>Hello World</h1>
            <b>{this.state.txt}</b>
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

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);

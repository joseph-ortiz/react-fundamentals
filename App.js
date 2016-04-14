import React from 'react';
import ReactDOM from 'react-dom';

// Class component with state.
class App extends React.Component{
    constructor() {
        super();
        this.state = {
         red: 0,
         green: 0,
         blue: 0
        }
        this.update = this.update.bind(this)

    }
    update(e) {
      this.setState({
              red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
              blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
              green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      })
    }
    render(){
        let txt = this.props.txt
        return (
            <div>
                <Slider ref="red" update={this.update}/>
                {this.state.red}
                <br/>
                <Slider ref="green" update={this.update}/>
                {this.state.green}
                <br/>
                <Slider ref="blue" update={this.update}/>
                {this.state.blue}
                <br/>
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


class Slider extends React.Component {
  render(){
    return (
      <input ref="inp" type="range"
        min="0"
        max="255"
        onChange={this.props.update}/>
    );
  }
}
/*
 * Widget Component
const Widget = (props) => {
    return (
        <div>
            <input type="text"
            onChange={props.update}/>
           <h1>{props.txt}</h1>
        </div>
    )
}
*/
ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';

// Class component with state.
class App extends React.Component{
    constructor(){
        super();
        this.state = {val:0};
        this.update= this.update.bind(this);
    }
    update() {
        this.setState({val: this.state.val +1 })
    }
    componentWillMount(){
        console.log('mounting')
    }
    componentDidMount(){
        console.log('mounted')
    }
    componentWillUnmount(){
        console.log('bye')
    }
    render(){
        console.log('rendeirng!');
        return <button onClick={this.update}>{this.state.val}</button>
    }
    }
    class Wrapper extends React.Component {
        constructor(){
            super();
        }
        mount(){
            ReactDOM.render(<App />, document.getElementById('a'))
        }
        unmount(){
            ReactDOM.unmountComponentAtNode(document.getElementById('a'))
        }
        render() {
            return (
                <div>
                <button onClick={this.mount.bind(this)}> Mount</button>
                <button onClick={this.unmount.bind(this)}> Unmount</button>
                <div id="a"></div>
                </div>
            )
        }
    }
    class Button extends React.Component {
        render(){
            return <button>{}</button>
        }
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
    ReactDOM.render(
        <Wrapper/>,
        document.getElementById('app')
    );

import React from 'react';
import './App.css';
import TextButton from './TextButton';

const buttonTextItems = ['Bears, beets, battlestar galactica', "What's Forrest Gump's password? 1Forrest1", 'Where do programmers like to hangout? The Foo Bar'];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      userText: ''
    };
  };

  updateUserText = event => {
    this.setState({ userText: event.target.value });

    if(event.target.value === this.state.snippet) {
      this.setState({victory: true, endTime: new Date().getTime() - this.state.startTime})
    }
  };

  chooseSnippet = index => {
    this.setState({ snippet: buttonTextItems[index], startTime: new Date().getTime()});
    this.inputRef.current.focus();
  };

  render () {
    return (
      <div>
        <h2>Type Race</h2>
        {this.state.snippet}
        <h4>{this.state.victory ? `Done! Woot! Time: ${this.state.endTime}ms` : null}</h4>
        <hr/>
        <input ref={this.inputRef} value={this.state.userText} onChange={this.updateUserText} />
        <hr/>
        {buttonTextItems.map((textItem, index) => <TextButton onClick={(e) => this.chooseSnippet(index, e)} buttonText={textItem} />)}
      </div>
    );
  };
};

export default App;

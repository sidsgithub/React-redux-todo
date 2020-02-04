import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('props', this.props);
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.props.setKeyword(event.target.value)} value={this.props.keyword}></input>
        <button onClick={() => this.props.setTodoList(this.props.keyword)}>Add todo</button>
        <ul>
          {
            this.props.list.length ?
              this.props.list.map((todo) => {
                return <li>{todo}</li>
              }) : null
          }
        </ul>
      </div>
    );
  }
}

export default App;

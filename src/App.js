import Dracula from 'graphdracula';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
          var Graph = Dracula.Graph
          var Renderer = Dracula.Renderer.Raphael
          var Layout = Dracula.Layout.Spring
          
          var graph = new Graph()

          graph.addEdge('Imperative', 'Paradigm', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Is one'
                                      }})
          graph.addEdge('Procedural', 'Paradigm', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Is one'
                                      }})
          graph.addEdge('Object Oriented', 'Paradigm', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Is one'
                                      }})
          graph.addEdge('Functional', 'Paradigm', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Is one'
                                      }})

          graph.addEdge('C', 'Procedural', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Supports paradigm'
                                      }})

          graph.addEdge('C++', 'C', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Has similar syntax to'
                                      }})
          graph.addEdge('C++', 'Object Oriented', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Supports paradigm'
                                      }})
                                      
          graph.addEdge('C#', 'C', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Has similar syntax to'
                                      }})

          graph.addEdge('C#', 'Object Oriented', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Supports paradigm'
                                      }})

          graph.addEdge('JavaScript', 'C', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Has similar syntax to'
                                      }})

          graph.addEdge('JavaScript', 'Functional', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Supports paradigm'
                                      }})

          graph.addEdge('JavaScript', 'Object Oriented', { directed : true,
                                      style: {
                                        stroke: '#ddd',
                                        fill: '#ddd',
                                        label: 'Supports paradigm'
                                      }})
                                      
          var layout = new Layout(graph)
          var renderer = new Renderer('#paper', graph, 800, 600)
          renderer.draw()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="paper">
        </div>
      </div>
    );
  }
}

export default App;

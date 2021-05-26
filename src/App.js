import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Events from './containers/Events/Events'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Events>

          </Events>
        </Layout>
      </div>
    );
  }
}

export default App;

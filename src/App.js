import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            This app was built with React and deployed in the cloud by using the AWS Amplify 
            Console and integrating with GitHub. 
          </h3>
          <h4>
            Learn about ReactJS, a JavaScript library for building applications:
          </h4>
        </header>

        <body>
          <p>
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introduction to React
            </a>
          </p>

          <p>
            <a
              className="App-link"
              href="https://www.w3schools.com/whatis/whatis_react.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quickstart Tutorial
            </a>
          </p>

          <p>
           <a
              className="App-link"
              href="https://www.tutorialspoint.com/reactjs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS Tutorial
            </a>
          </p>

          <p>
            <a
              className="App-link"
              href="https://reactjs.org/tutorial/tutorial.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React at reactjs.org
            </a>
          </p>

          <p>
            <a
              className="App-link"
              href="https://www.udemy.com/courses/search/?src=ukw&q=react&p=1&price=price-free"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Online Classes at Udemy
            </a>
          </p>

          <p>
            <a
              className="App-link"
              href="https://aws.amazon.com/getting-started/tutorials/deploy-react-app-cicd-amplify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Amplify React Tutorial
            </a>
          </p>

          <div>
            <h2> . </h2>
          </div>
        </body>

      </div>
    );
  }
}

export default App;
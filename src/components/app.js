import React, { Component } from 'react';
import MadLibsForm from './madlibs_form';

export default class App extends Component {
  render() {
    return (
      <div className='backgroundSkew'>
        <div className="header">
          <h1>Angry Libs</h1>
          <div className="subheader">
          <h2>Fill out the fields below and click on the generate button to have this app tell you a story. Hopefully, it's a good one.</h2>
          </div>
        </div>
        <MadLibsForm name="Alfred" />
      </div>
    );
  }
}

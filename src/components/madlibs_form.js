import React, { Component } from 'react';
import {
  Col,
  Row,
  Card
} from 'reactstrap';
import _ from 'lodash';
import MadLibContent from './madlib_content';


function MadLibInput(props) {
  return (
    <Col md="2" className="input-wrapper">
      <Row>
        <Col md="2">
          <label className="green-label">{props.index}</label>
        </Col>
        <Col md="10">
          <input placeholder={props.placeholder} type="text" value={props.state} onChange = {props.onChange}/>
        </Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="10">
          <div className="input-description">{props.placeholder}</div>
        </Col>
      </Row>
    </Col>
  );
}


class madLibsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      completedForm: false,
      colorOne: '',
      celebOne: '',
      pluralNounOne: '',
      adjOne: '',
      adjTwo: '',
      nounOne: '',
      numOne: '',
      numTwo: '',
      pluralNounTwo: '',
      verbOne: '',
      adverbOne: '',
      nounTwo: '',
      adjThree: '',
      verbTwo: '',
      animalOne: '',
      firstNameOne: '',
      liquidOne: '',
      carBrandOne: '',
      adjFour: '',
      adverbTwo: ''
    }
  }

  handleChange = function(props){
    return function(event){
      this.setState({[props.inputTitle]: event.target.value});
      //console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
      console.log(`value for state ${props.inputTitle} is ${this.state[props.inputTitle]}`)
    }.bind(this);
  }

  handleSubmit = function(event){
    console.log(`${this.state.completedForm}`);
    this.setState({completedForm: true});
    event.preventDefault();
  }.bind(this);

  hanldleClick = function(){
    this.setState({
      completedForm: false,
      colorOne: '',
      celebOne: '',
      pluralNounOne: '',
      adjOne: '',
      adjTwo: '',
      nounOne: '',
      numOne: '',
      numTwo: '',
      pluralNounTwo: '',
      verbOne: '',
      adverbOne: '',
      nounTwo: '',
      adjThree: '',
      verbTwo: '',
      animalOne: '',
      firstNameOne: '',
      liquidOne: '',
      carBrandOne: '',
      adjFour: '',
      adverbTwo: ''
    });
  }.bind(this);

  renderButton = function() {
    if(this.state.completedForm) {
      return <a className="clear-button" onClick={this.hanldleClick}>Clear Mad Lib</a>
    }
    return <input type="submit" className="generate-button" value="Generate Mad Lib" />
  }

    render() {
      this.inputData = [
        {placeholder: 'Color', prop: 'colorOne', id: '1', state: this.state.colorOne},
        {placeholder: 'Celebrity', prop: 'celebOne', id: '2', state: this.state.celebOne},
        {placeholder: 'Noun(Plural)', prop: 'pluralNounOne', id: '3', state: this.state.pluralNounOne},
        {placeholder: 'Adjective', prop: 'adjOne', id: '4', state: this.state.adjOne},

        {placeholder: 'Adjective', prop: 'adjTwo', id: '5', state: this.state.adjTwo},
        {placeholder: 'Noun', prop: 'nounOne', id: '6', state: this.state.nounOne},
        {placeholder: 'Number', prop: 'numOne', id: '7', state: this.state.numOne},
        {placeholder: 'Number', prop: 'numTwo', id: '8', state: this.state.numTwo},

        {placeholder: 'Noun(Plural)', prop: 'pluralNounTwo', id: '9', state: this.state.pluralNounTwo},
        {placeholder: 'Verb', prop: 'verbOne', id: '10', state: this.state.verbOne},
        {placeholder: 'Adverb', prop: 'adverbOne', id: '11', state: this.state.adverbOne},
        {placeholder: 'Noun', prop: 'nounTwo', id: '12', state: this.state.nounTwo},

        {placeholder: 'Adjective', prop: 'adjThree', id: '13', state: this.state.adjThree},
        {placeholder: 'Verb', prop: 'verbTwo', id: '14', state: this.state.verbTwo},
        {placeholder: 'Animal', prop: 'animalOne', id: '15', state: this.state.animalOne},
        {placeholder: 'First Name', prop: 'firstNameOne', id: '16', state: this.state.firstNameOne},

        {placeholder: 'Liquid', prop: 'liquidOne', id: '17', state: this.state.liquidOne},
        {placeholder: 'Car Brand', prop: 'carBrandOne', id: '18', state: this.state.carBrandOne},
        {placeholder: 'Adjective', prop: 'adjFour', id: '19', state: this.state.adjFour},
        {placeholder: 'Adverb', prop: 'adverbTwo', id: '20', state: this.state.adverbTwo}
      ]
      return (
        <div className="card-wrapper">
          <Card>        
            <form onSubmit={this.handleSubmit} id="madlib-form">  
              <Row style={{textAlign: "center", color: "white"}}>
                {
                  _.map(this.inputData, (data,indexKey) => {
                    return <MadLibInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                  })
                }
              </Row>
              <Row>
                <Col md="12" className="button-wrapper">
                  {this.renderButton()}
                </Col>
              </Row>
            </form>
            <MadLibContent data={this.state}/>
          </Card>
        </div>
      );
    }
  }

  export default madLibsForm;
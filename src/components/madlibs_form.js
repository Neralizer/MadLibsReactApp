import React, { Component } from 'react';
import {
  Col,
  Row,
  Card
} from 'reactstrap';
import _ from 'lodash';


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
      colorOne: '',
      pluralNounOne: '',
      adjOne: '',
      celebOne: '',
      adjTwo: '',
      nounOne: '',
      numOne: '',
      numTwo: ''
    }
  }

  handleChange = function(props){
    return function(event){
      this.setState({[props.inputTitle]: event.target.value});
      //console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
      console.log(`value for state ${props.inputTitle} is ${this.state[props.inputTitle]}`)
    }.bind(this);
  }

    render() {
      this.inputData = [
        {placeholder: 'Color', prop: 'colorOne', state: this.state.colorOne},
        {placeholder: 'Noun(Plural)', prop: 'pluralNounOne', state: this.state.pluralNounOne},
        {placeholder: 'Adjective', prop: 'adjOne', state: this.state.adjOne},
        {placeholder: 'Celebrity', prop: 'celebOne', state: this.state.celebOne},

        {placeholder: 'Adjective', prop: 'adjTwo', state: this.state.adjTwo},
        {placeholder: 'Noun', prop: 'nounOne', state: this.state.nounOne},
        {placeholder: 'Number', prop: 'numOne', state: this.state.numOne},
        {placeholder: 'Number', prop: 'numTwo', state: this.state.numTwo}
      ]
      return (
        <div className="card-wrapper">
          <Card>          
            <Row style={{textAlign: "center", color: "white"}}>
              {
                _.map(this.inputData, (data,indexKey) => {
                  return <MadLibInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                })
                }
            </Row>
          </Card>
        </div>
      );
    }
  }

  export default madLibsForm;
import React, { Component } from 'react';
import {
  Col,
  Row
} from 'reactstrap';

class madLibsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pluralNounOne: '',
      adjOne: '',
      celebOne: '',
      colorOne: ''
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
      return (
        <Row style={{textAlign: "center", color: "white"}}>
          <Col md="3" className="inputWrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'pluralNounOne'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="inputDescription">Noun (Plural)</div>
              </Col>
             </Row>
          </Col>
          <Col md="3" className="inputWrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'adjOne'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="inputDescription">Adjective</div>
              </Col>
             </Row>
          </Col>
          <Col md="3" className="inputWrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'celebOne'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="inputDescription">Celebrity</div>
              </Col>
             </Row>
          </Col>
          <Col md="3" className="inputWrapper">
            <Row>
              <Col md="2">
                <label className="greenLabel">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'colorOne'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="inputDescription">Color</div>
              </Col>
             </Row>
          </Col>
        </Row>
      );
    }
  }

  export default madLibsForm;
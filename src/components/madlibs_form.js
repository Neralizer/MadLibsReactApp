import React, { Component } from 'react';
import {
  Col,
  Row,
  Card
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
        <div className="card-wrapper">
          <Card>
            <Row style={{textAlign: "center", color: "white"}}>
              <Col md="3" className="input-wrapper">
                <Row>
              <Col md="2">
                <label className="green-label">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'pluralNounOne'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="2"></Col>
              <Col md="10">
                <div className="input-description">Noun (Plural)</div>
              </Col>
             </Row>
          </Col>
          <Col md="3" className="input-wrapper">
            <Row>
              <Col md="2">
                <label className="green-label">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'adjOne'})}/>
              </Col>
            </Row>
            <Row>
            <Col md="2"></Col>
              <Col md="10">
                <div className="input-description">Adjective</div>
              </Col>
             </Row>
          </Col>
          <Col md="3" className="input-wrapper">
            <Row>
              <Col md="2">
                <label className="green-label">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'celebOne'})}/>
              </Col>
            </Row>
            <Row>
            <Col md="2"></Col>
              <Col md="10">
                <div className="input-description">Celebrity</div>
              </Col>
             </Row>
          </Col>
          <Col md="3" className="input-wrapper">
            <Row>
              <Col md="2">
                <label className="green-label">1</label>
              </Col>
              <Col md="10">
                <input placeholder="Color" type="text"  onChange = {this.handleChange({inputTitle: 'colorOne'})}/>
              </Col>
            </Row>
            <Row>
            <Col md="2"></Col>
              <Col md="10">
                <div className="input-description">Color</div>
              </Col>
             </Row>
          </Col>
              </Row>
            </Card>
        </div>
      );
    }
  }

  export default madLibsForm;
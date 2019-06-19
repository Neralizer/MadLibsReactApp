import React, { Component } from 'react';

class MadLibContent extends Component { //defines React component, props established with this.props
    render(){
        const data = this.props.data; 
        const completed = this.props.completedForm;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="contentWrapper">
                The ocean was <label className="black-label">1</label>{this.renderLabel(data.colorOne)}, a deeper <label className="black-label">1</label>{this.renderLabel(data.colorOne)} than <label className="black-label">2</label>{this.renderLabel(data.celebOne)} had ever 
                seen before. Above the surf, a group of <label className="black-label">4</label>{this.renderLabel(data.adjOne)} <label className="black-label">3</label>{this.renderLabel(data.pluralNounOne)} flew and hooted softly. How could this
                 have happened? <label className="black-label">2</label>{this.renderLabel(data.celebOne)} felt <label className="black-label">5</label>{this.renderLabel(data.adjTwo)}, like a 
                big <label className="black-label">5</label>{this.renderLabel(data.adjTwo)} <label className="black-label">6</label>{this.renderLabel(data.nounOne)}. It was as if <label className="black-label">7</label>{this.renderLabel(data.numOne)} separate gnats came in and buzzed, one 
                by one, in <label className="black-label">2</label>{this.renderLabel(data.celebOne)}'s ear. Well, maybe not, <label className="black-label">7</label>{this.renderLabel(data.numOne)}.
                Maybe, more like <label className="black-label">8</label>{this.renderLabel(data.numTwo)}. 

                Where would this person go to find the <label className="black-label">9</label>{this.renderLabel(data.pluralNounTwo)}? <label className="black-label">2</label>{this.renderLabel(data.celebOne)} would have to <label className="black-label">10</label>{this.renderLabel(data.verbOne)} <label className="black-label">11</label>{this.renderLabel(data.adverbOne)} in 
                order to find true <label className="black-label">12</label>{this.renderLabel(data.nounTwo)} again. Just as the everything seemed hopeless, out from the palm trees
                came a <label className="black-label">15</label>{this.renderLabel(data.animalOne)}. He simply chose to <label className="black-label">14</label>{this.renderLabel(data.verbTwo)} out from 
                the palms. <label className="black-label">2</label>{this.renderLabel(data.celebOne)} decided to name <label className="black-label">15</label>{this.renderLabel(data.animalOne)} <label className="black-label">16</label>{this.renderLabel(data.firstNameOne)}. Things seemed 
                much <label className="black-label">13</label>{this.renderLabel(data.adjThree)}! Yet, when they got to <label className="black-label">2</label>{this.renderLabel(data.celebOne)}'s new <label className="black-label">18</label>{this.renderLabel(data.carBrandOne)}, it 
                spilled <label className="black-label">2</label>{this.renderLabel(data.celebOne)}'s cup of <label className="black-label">17</label>{this.renderLabel(data.liquidOne)} all over 
                the interior! <label className="black-label">2</label>{this.renderLabel(data.celebOne)} was <label className="black-label">19</label>{this.renderLabel(data.adjFour)}, and<label className="black-label">20</label> {this.renderLabel(data.adverbTwo)} kicked the <label className="black-label">5</label>{this.renderLabel(data.animalOne)} out 
                of his car. Still, <label className="black-label">2</label>{this.renderLabel(data.celebOne)} felt better and drove off.
                </div>
            </div>
        )
        }

        renderLabel = function(state, id) {
            const data = this.props.data;
            return (
                <span>
                    <b className="bold-effect">{state}</b>
                </span>
            )
        }.bind(this);
}

export default MadLibContent;
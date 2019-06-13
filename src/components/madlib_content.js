import React, { Component } from 'react';

class MadLibContent extends Component { //defines React component, props established with this.props
    render(){
        const data = this.props.data;
        return (
            <div className="content-wrapper">
                The ocean was <b>{data.colorOne}</b>, a deeper <b>{data.colorOne}</b> than <b>{data.celebOne}</b> had ever seen before. Above the 
                surf, a group of <b>{data.adjOne}</b> <b>{data.pluralNounOne}</b> flew and hooted softly. How could this have happened? <b>{data.celebOne}</b> felt <b>{data.adjTwo}</b>, like a 
                big <b>{data.adjTwo}</b> <b>{data.nounOne}</b>. It was as if <b>{data.numOne}</b> separate gnats came in and buzzed, one 
                by one, in <b>{data.celebOne}</b>'s ear. Well, maybe not, <b>{data.numOne}</b>.
                Maybe, more like <b>{data.numTwo}</b>. 

                Where would this person go to find the <b>{data.pluralNounTwo}</b>? <b>{data.celebOne}</b> would have to <b>{data.verbOne}</b> <b>{data.adverbOne}</b> in order to find true <b>{data.nounTwo}</b> again. Just 
                as the everything seemed hopeless, out from the palm trees
                came a <b>{data.animalOne}</b>. He simply chose to <b>{data.verbTwo}</b> out from 
                the palms. <b>{data.celebOne}</b> decided to name <b>{data.animalOne}</b> <b>{data.firstNameOne}</b>. Things seemed 
                much better! Yet, when they got to <b>{data.celebOne}</b>'s new <b>{data.carBrandOne}</b>, it 
                spilled <b>{data.celebOne}</b>'s cup of <b>{data.liquidOne}</b> all over 
                the interior! <b>{data.celebOne}</b> was <b>{data.adjFour}</b>, and <b>{data.adverbTwo}</b> kicked <b>{data.animalOne}</b> out 
                of his car. Still, <b>{data.celebOne}</b> felt better and drove off.
            </div>
        )
    }
}

export default MadLibContent;
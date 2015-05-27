var React = require('react');
var ExplanationComponent = require( './explanation.jsx')
var HelloWorld = require('./HelloWorld.jsx');


//Box holding list of explanations
module.exports = React.createClass({

onTextAreaClicked : function(event) {
    event.target.value="";
    console.log("text area was clicked");
},

getInitialState : function() {
    return ({
        explanationSubmitted : false,
    });
},

updateText : function(event) {
    console.log("in update text")
    console.log("value: " + event.target.value)
    this.setState({
        newExplanation : event.target.value,
    })
},

onExplanationSubmitted : function(event) {
    ///SEND THIS TO SERVER
    console.log("on explanation submitted")
    var newExplanationStr = this.state.newExplanation;
    if (!newExplanationStr || newExplanationStr == "") return;
     this.setState({
        explanationSubmitted : true,
    });
    console.log("new explanations str: " + newExplanationStr)
    var newExplanationObj = {
        "explanation_id" : this.props.explanations.length + 1,
        "explanation" : newExplanationStr,
        "upvotes": 0
    }
    this.props.onUpvoteOrExplanationAdded();
    dataStore.addExplanation(this.props.questionID, this.props.answerID, newExplanationObj);

    // $.get("http://localhost:3000/allQuizData", function(result) {
    //     console.log("in the callback");
    //     allQuizData = result;
    //     quizData = result[0];
    //    // DO STUFF HERE AFTER RECEIVING DATA FROM SERVER
    // }.bind(this));
},


getInitialExplanationsArr : function(explanationsObj) {
var explanationsArray = new Array;
    for(var o in this.props.explanations) {
        explanationsArray.push(this.props.explanations[o]);
    }
    explanationsArray.sort(function(a, b) {
        return b.upvotes - a.upvotes;
    });
    return explanationsArray;
},

getExplanationElems : function() {
 //TODO: sort these by value
 console.log("in get explanations");
    var explanationsArray = new Array;
    for(var o in this.props.explanations) {
        explanationsArray.push(this.props.explanations[o]);
    }
   var listItems = [];
    explanationsArray.sort(function(a, b) {
        return b.upvotes - a.upvotes;
    });

    //var explanations = this.state.explanations;
    for (var i = 0; i < explanationsArray.length; i++) {
        var newAnswer = (
            <div>
                <ExplanationComponent explanation={explanationsArray[i]}
                    questionID = {this.props.questionID}
                    answerID = {this.props.answerID}
                    onVote = {this.props.onUpvoteOrExplanationAdded} />
            </div>);
        listItems.push(newAnswer);
    }
    return listItems;
},

render: function() {
    var incorrectStr = "Write an explanation for why the answer you chose is incorrect."
    var correctStr = "How did you know that this was the right answer?"
    console.log(this.props.correct);
    var textAreaStr = (this.props.correct) ? correctStr : incorrectStr;

    var addExplanationBox = (this.state.explanationSubmitted) ? null :
        (<div>
            <textarea
            className="explanationTextArea"
            ref="explanationTextArea"
            defaultValue={textAreaStr}
            onClick={this.onTextAreaClicked}
            onChange={this.updateText}/>
            <div>
                <input type='button' className='addExplanationButton' value='Add Explanation' onClick={this.onExplanationSubmitted} />
            </div>
        </div>);

    var explanations = this.getExplanationElems();
    var explanationText = (explanations.length == 0) ? null : "Please upvote/downvote explanations from your classmates, or write your own answer: ";
    return (
   <div>
        <i>{explanationText}</i>
        <div className="ExplanationBox">
            {explanations}
            {addExplanationBox}
        </div>
    </div>
    );
  }
});
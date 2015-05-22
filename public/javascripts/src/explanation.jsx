var React = require('react');

//A single explanation/solution for an answer

module.exports = React.createClass({

getInitialState : function() {
        return {
            voted : false
        };
    },

saveVote : function(value) {
    if (this.state.voted) {
        return;
    }
    this.setState ({
        voted : true
    });
    this.props.explanation["explanation_id"]
    dataStore.addVote(this.props.questionID, this.props.answerID, this.props.explanation["explanation_id"], value);
},

upvote : function() {
    this.saveVote(1);
},

downvote : function() {
   this.saveVote(-1);
},

render: function() {
    return (
        <div className="singleExplanation">
        <div className="explanationText">{this.props.explanation["explanation"]} </div>
            <div className="explanationVoteBox">
                <div>
                <img src="http://www.ratemyroomie.com/Content/Images/upvoteIcon2.png"
                    onClick={this.upvote}/>
                </div>
                <div className="upvoteText">{this.props.explanation["upvotes"]}</div>
                <div>
                <img src="http://www.ratemyroomie.com/Content/Images/downvoteIcon2.png"
                    onClick={this.downvote}/>
                </div>
            </div>
        </div>
    );
    }
});

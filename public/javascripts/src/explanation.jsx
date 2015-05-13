var React = require('react');

//A single explanation/solution for an answer

module.exports = React.createClass({

getInitialState : function() {
        return {
            upvotes : this.props.explanation["upvotes"],
            voted : false
        };
    },

upvote : function() {
    if (this.state.voted) {
        return;
    }
    this.setState ({
            upvotes : this.state.upvotes + 1,
            voted : true
        });
    this.props.onVote();

},
downvote : function() {
  if (this.state.voted) {
    return;
  }
  this.setState ({
            upvotes : this.state.upvotes - 1,
            voted : true
        });
  this.props.onVote();
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
                <div className="upvoteText">{this.state.upvotes}</div>
                <div>
                <img src="http://www.ratemyroomie.com/Content/Images/downvoteIcon2.png"
                    onClick={this.downvote}/>
                </div>
            </div>
        </div>
    );
    }
});

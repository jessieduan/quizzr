var React = require('react');

module.exports = React.createClass({

getInitialState : function() {
    return {
      finishedSurvey : false,
    };
},

onSubmitForm : function() {
  this.setState ({
        finishedSurvey : true,
    });
  var surveyAnswers = {
    "1" : this.state.question1,
    "2" : this.state.question2,
    "3" : this.state.question3,
    "4" : this.state.question4,
  };
  dataStore.saveSurvey(surveyAnswers);
},

updateQuestion1 : function(event) {
    this.setState({
        question1 : event.target.value,
    })
},

updateQuestion2: function(event) {
    this.setState({
        question2 : event.target.value,
    })
},

updateQuestion3 : function(event) {
    this.setState({
        question3 : event.target.value,
    })
},

updateQuestion4 : function(event) {
    this.setState({
        question4 : event.target.value,
    })
},

render: function() {
    // var survey =
    // (<div>
    //     <form>
    //         <div>
    //             <div>
    //                 Did you find the explanations from other students to be helpful in understanding the answer?
    //             </div>
    //             <textarea
    //                 className="surveyTextArea"
    //                 onChange={this.updateQuestion1}/>
    //         </div>
    //         <div>
    //             <div>
    //                 Overall, did you feel that this system could enhance your learning as compared to a standard online quiz?
    //             </div>
    //             <textarea
    //                 className="surveyTextArea"
    //                 onChange={this.updateQuestion2}/>
    //         </div>
    //          <div>
    //             <div>
    //                 What did you like and dislike about this system?
    //             </div>
    //             <textarea
    //                 className="surveyTextArea"
    //                 onChange={this.updateQuestion3}/>
    //         </div>
    //          <div>
    //             <div>
    //                 Any other comments?
    //             </div>
    //             <textarea
    //                 className="surveyTextArea"
    //                 onChange={this.updateQuestion4}/>
    //         </div>
    //         <input type='button' className='submitSurvey' value='Submit' onClick={this.onSubmitForm}/>
    //     </form>
    // </div>);

    if (!dataStore.isControl && !this.state.finishedSurvey) {
        return (
            <div className="googleForm">
                <iframe src="https://docs.google.com/forms/d/1jGaI__9Z2HpLsvpb_jMxo6gcknl8mkRmLIyJfxca_50/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
        );
    }

    return (
        <div>
            <h1>Thanks for completing this quiz!</h1>
        </div>
    );
}
});
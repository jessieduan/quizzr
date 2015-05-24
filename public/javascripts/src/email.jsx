var React = require('react');

module.exports = React.createClass({
getInitialState : function() {
        return {
            userName : undefined,
            emailAddress  : undefined,
            canContinue : false,
        };
    },

doAlert: function() {
    alert("hi there!");
},

formSubmitted : function(form) {
    event.preventDefault(event);
    dataStore.saveNewUser(
        this.state.userName,
        this.state.emailAddress);
    this.props.onNextButtonClicked();
},

userNameChanged : function(event) {
 this.setState ({
       userName  : event.target.value,
       canContinue : this.state.emailAddress != undefined
    });
},

emailChanged : function(event) {
 this.setState ({
       emailAddress  : event.target.value,
       canContinue : this.state.userName != undefined
    });
    //validate email here?
},

render: function() {
    return (
    <div>
        <h1>Thanks for trying out quizzr!</h1>
        <p>The following quiz covers some material we have seen in CS376 this quarter.
        <br />Enter your name and email address to get started!</p>
         <form onSubmit={this.formSubmitted} className="userFields">
            <div>
                <label>
                    <input type='text' className="textInput" placeholder='Your name' name='user_name'
                    //value={this.state.name}
                    onChange={this.userNameChanged}
                    autoFocus={true} />
                </label>
            </div>
            <div>
                <label>
                <input type='text' className="textInput" placeholder='email' name='email_address'
                    onChange={this.emailChanged}/>
                </label>
            </div>
        <input type='submit' value='next >' disabled={!this.state.canContinue} onClick={this.formSubmitted} />
        </form>
    </div>
    )
}
});
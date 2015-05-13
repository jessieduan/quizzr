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

    var newUser = {
        username: this.state.userName,
        useremail: this.state.emailAddress
    };

    $.ajax({
        url: '/adduser',
        dataType: 'json',
        type: 'POST',
        data: newUser,
        success: function(data) {
            this.props.onNextButtonClicked();
        }.bind(this),
        error: function(xhr, status, err) {
            console.log(err);
        }.bind(this)
    });
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
        <h1>Welcome to quizzr!</h1>
        Enter your name and email address to get started with our quiz.
         <form onSubmit={this.formSubmitted}>
            <div>
                <label>
                    <input type='text' placeholder='Your name' name='user_name'
                    //value={this.state.name}
                    onChange={this.userNameChanged}
                    autoFocus={true} />
                </label>
            </div>
            <div>
                <label>
                <input type='text' placeholder='email' name='email_address'
                    onChange={this.emailChanged}/>
                </label>
            </div>
        <input type='submit' value='next' disabled={!this.state.canContinue} onClick={this.formSubmitted} />
        </form>
    </div>
    )
}
});
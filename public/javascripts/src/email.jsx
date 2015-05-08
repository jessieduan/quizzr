var React = require('react');

module.exports = React.createClass({
doAlert: function() {
    alert("hi there!");
},

formSubmitted : function() {
    event.preventDefault(event);
    //SEND NAME AND EMAIL TO SERVER HERE
    console.log("Email address: " + this.state.emailAddress);
    console.log("Name: " + this.state.userName);
    this.props.onNextButtonClicked()
},

userNameChanged : function(event) {
 this.setState ({
       userName  : event.target.value
    });
},

emailChanged : function(event) {
 this.setState ({
       emailAddress  : event.target.value
    });
    //validate email here?
},

render: function() {
    return (
    <div>
        <h1>This is another email component again</h1>
         <form onSubmit={this.formSubmitted}>
            <input type='text' placeholder='Your name' name='user_name'
                //value={this.state.name}
                onChange={this.userNameChanged}
                autoFocus={true} />
            <input type='text' placeholder='email' name='email_address'
                onChange={this.emailChanged}/>
        <input type='submit' value='next' onClick={this.formSubmitted} />
        </form>
    </div>
    )
}
});
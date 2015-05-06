var React = require('react');

module.exports = React.createClass({
doAlert: function() {
    alert("hi there!");
},

formSubmitted : function() {
    event.preventDefault(event);
    //SEND EMAIL TO SERVER HERE
    console.log(this.state.emailAddress);
    this.props.onNextButtonClicked()
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
            <input type='text' placeholder='email' name='email_address'
                //value={this.state.name}
                ref='email'
                onChange={this.emailChanged}
                autoFocus={true} />
        <input type='submit' value='next' onClick={this.formSubmitted} />
        </form>
    </div>
    )
}
});
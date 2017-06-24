Template.registerUser.events({
    'submit #registerUser' : function(e){
        e.preventDefault();
        var email = e.target.registerEmail.value;
        var password = e.target.registerPassword.value;

            Accounts.createUser({
              email: email,
              password: password
            });

        return false;
    }
});

Template.loginUser.events({
    'submit #loginUser' : function(e){
        e.preventDefault();
        var email = e.target.loginEmail.value,
            password = e.target.loginPassword.value;

            Meteor.loginWithPassword(email, password, function(err){
                if(err){

                }else{
                    console.log("succsess");
                }
            });
        return false;
    }
});

Template.navigation.events({
    'click .logout' : function(e){
        e.preventDefault();
        Meteor.logout(function(){
            FlowRouter.go('/');
        });
    }
})

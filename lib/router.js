FlowRouter.route('/', {
    triggersEnter: [trackRouteEntry],
    action: function(){
        BlazeLayout.render('mainLayout', {content: "home"})
    }
    ,waitOn: function() {
        return [
            Meteor.subscribe('worksPub'),
            Meteor.subscribe("worksimgPub"),
            Meteor.subscribe("postimgPub"),
        ]
    },
    triggersExit: [trackRouteClose]
})
FlowRouter.route('/case/:id', {
    triggersEnter: [trackRouteEntry, caseEntry],
    action: function(){
        BlazeLayout.render("mainLayout", {content: "case"})
        // return [Meteor.subscribe('worksimgPub')]
    }
    ,waitOn: function() {
        return [
            Meteor.subscribe('worksPub'),
            Meteor.subscribe("worksimgPub"),
            Meteor.subscribe("postimgPub"),
        ]
    },
    triggersExit: [trackRouteClose]
})
FlowRouter.route('/backend',{
    triggersEnter: [trackRouteEntry],
    action: function(){
        BlazeLayout.render("mainLayout", {content: 'editContent'})
    }
})
FlowRouter.route('/accounts',{
    action: function(){
        BlazeLayout.render("mainLayout", {content: 'accounts'})
    }
})


function trackRouteEntry(){
    window.scrollTo(0,0)
}
function caseEntry(){

}
function trackRouteClose(){

}

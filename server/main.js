import { Meteor } from 'meteor/meteor';

Meteor.publish("worksPub", function(){
    return Works.find();
});
Meteor.publish("worksimgPub", function(){
    return Worksimg.find();
});
Meteor.publish("postimgPub", function(){
    return Postimg.find();
});

// Meteor.publish('worksPub', function(_id) {
//   var post = Works.findOne({_id: _id});
//   if(!post) return this.ready();
//   return [
//     Works.find(),
//     Worksimg.find({_id: post.picture})
//   ]
// });

Meteor.startup(() => {
  // code to run on server at startup
});

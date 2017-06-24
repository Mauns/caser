Meteor.subscribe("worksPub");
Meteor.subscribe("worksimgPub");
Meteor.subscribe("postimgPub");

// Template.insertWorksForm.helpers({
//     categories: function(){
//         return [
//         ];
//     }
// });

SimpleSchema.debug = true;
FS.debug = true;

// Template.worksFormInsert.helpers({
//     catOptions : function()
//     {
//         return [
//             {label: "Web", value : "web"},
//             {label: "Video", value : "video"},
//             {label: "Design", value : "design"}
//         ];
//     }
// });

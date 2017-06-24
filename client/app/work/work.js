
AutoForm.hooks({
 worksFormInsert: {
   after: {
     insert: function(error, result, template) {
         if(result){
             insertedFile = Works.findOne(result).bgimg;
             Worksimg.update({_id: insertedFile}, {$set: {'work': result}});
             console.log(result);
         }else{

         }
     }
   }
 }
});

AutoForm.hooks({
 worksFormInsert: {
   after: {
     insert: function(error, result, template) {
         if(result){
             var insertedFileCount = Works.findOne(result).picture;
             for(var i=0; i<=insertedFileCount.length; i++){
                 insertedFile = Works.findOne(result).picture[i];
                 Postimg.update({_id: insertedFile}, {$set: {'post': result}});
                 console.log(result);
             }
         }else{

         }
     }
   }
 }
});


Template.work.helpers({
    cases: function(){
        return Works.find({});
    },
    casesImg: function(){
            return Worksimg.findOne({ work: this._id });
    },
    postImg: function(){
        return Postimg.find({ post: this._id });
    }
});

// update Form
// Template.worksFormUpdate.helpers({
//     selectedCase: function(){
//         return Works.findOne(Session.get("selectedCaseDoc"));
//     },
//     isSelectedCase: function(){
//         return Session.equals("selectedCaseId", this._id);
//     },
//     formType: function(){
//         if(Session.get("selectedCaseId")){
//             return "update";
//         }else{
//             return "disabled";
//         }
//     },
//     disableButtons: function () {
//         return !Session.get("selectedCaseId");
//     }
// });
//
// Template.worksFormUpdate.events({
//   'click .caseWrap': function () {
//     Session.set("selectedCaseId", this._id);
//   }
// });


// detail view
Template.case.helpers({
    cases: ()=> {
        var id = FlowRouter.getParam('id');
        return Works.findOne({_id: id});
    },
    casesImg: ()=> {
        var id = FlowRouter.getParam('id');
        return Worksimg.findOne({work: id});
    },
    postImg: ()=> {
        var id = FlowRouter.getParam('id');
        return Postimg.find({post: id});
    }
});
Template.case.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('worksPub');
    });
    self.autorun(function(){
        self.subscribe('worksimgPub');
    });
    self.autorun(function(){
        self.subscribe('postimgPub');
    });
});


// delete Button
  Template.work.helpers({
    docs: function () {
      return Collections.Works.find();
    },
    onError: function () {
      return function (error) { alert("BOO!"); console.log(error); };
    },
    onSuccess: function () {
      return function (result) { alert("YAY!"); console.log(result); };
    },
    beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete "' + doc.name + '"?')) {
          this.remove();
        }
      };
    }
  });

// Template.work.events({
//     'mouseenter .caseWrap' : function(e){
//         if ($('.heroWrap').hasClass('blur')) {
//         }else{
//             $('.heroWrap').addClass('blur');
//             // $(e.target).removeClass('blur');
//         }
//     },
//     'mousemove .caseWrap' : function(e){
//         if ($('.heroWrap').hasClass('blur')) {
//         }else{
//             $('.heroWrap').addClass('blur');
//             // $(e.target).removeClass('blur');
//         }
//     },
//     'mouseout .caseWrap' : function(e){
//         if ($('.heroWrap').hasClass('blur')) {
//             $('.heroWrap').removeClass('blur');
//         }else{
//
//         }
//     }
// });

// Animation
// Template.work.events({
//     'mousemove .moveImage' : function(e){
//         var amountMovedX = (e.pageX * 0.05 / 7 +($('.caseWrap').width() * -0.05 / 7));
//         var amountMovedY = (e.pageY * -0.05 / 6.25 + ($('.caseWrap').height() * -0.05 / 7));
//             this.find('.caseImage').css({'transform':'translateY('+amountMovedY+'%) translateX('+amountMovedX+'%)', '-moz-transform':'translateY('+amountMovedY+'%) translateX('+amountMovedX+'%)','-webkit-transform':'translateY('+amountMovedY+'%) translateX('+amountMovedX+'%)'});
//             // console.log('transform: translateX(', amountMovedX + 'px)');
//     }
// });
// Template.work.events({
//     'mouseenter .case' : function(e){
//         // e.preventDefault();
//         $(e.target).addClass('moveImage');
//     },
//     'mouseout .case' : function(e){
//         // e.preventDefault();
//         $(e.target).removeClass('moveImage');
//     }
// });

// Works.after.insert(function(error, template, result) {
//     insertedFile = Works.findOne({result}).picture;
//     console.log(insertedFile);
//     Worksimg.update({_id: insertedFile}, {$set: {'image': result}});
//
// });

// AutoForm.hooks({
//  worksFormInsert: {
//    after: {
//      insert: function(error, template, result) {
//         //  insertedFile = Works.findOne(result).picture.img;
//              Worksimg.update({_id: insertedFile}, {$set: {'image': result}});
//      }
//    }
//  }
// });

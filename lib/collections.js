// worksImg
var dropbox = new FS.Store.Dropbox("worksimg", {
  key: "anv5ewp1p5o8vfu",
  secret: "m2ci4zb02wsha6a",
  token: "HH1fPDTOzqwAAAAAAAAfmZZsiudpvRlk95FvPY7IvBx19Abh32sFQV1egKy8-OQ9",
  folder: "cases",
})

Worksimg = new FS.Collection("worksimg",{
    stores: [dropbox],
    maxTries: 5,
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
})
Worksimg.allow({
    insert: function(doc){
        return true
    },
    update: function(doc){
        return true
    },
    remove: function(doc){
        return true
    },
    download: function(doc, fileObj){
        return true
    }
})

Postimg = new FS.Collection("postimg",{
    stores: [dropbox],
    maxTries: 5,
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
})
Postimg.allow({
    insert: function(doc){
        return true
    },
    update: function(doc){
        return true
    },
    remove: function(doc){
        return true
    },
    download: function(doc, fileObj){
        return true
    }
})


Works = new Mongo.Collection("works", {})
Works.allow({
    insert: function(doc){
        return true
    },
    update: function(doc){
        return true
    },
    remove: function(doc){
        return true
    }
})
// Attach Schema
Works.attachSchema(new SimpleSchema({
    title : {
        type : String,
        label : "Titel",
        max : 200
    },
    category: {
        type: Array,
        label : "Kategorie"
    },
    "category.$" : {
        type : Object
    },
    "category.$.tags" : {
        type : String,
        autoform: {
            options: [
                {label: "Web", value: "web"},
                {label: "Video", value: "video"},
                {label: "Design", value: "design"}
            ]
        }
    },
    description: {
        type : String,
        label : "Beschreibung",
        max : 400
    },
    link : {
        type : String,
        label : "Link"
    },
    video : {
        type : Array,
        optional: true,
        label : "Video"
    },
    "video.$" : {
        type : Object
    },
    "video.$.code" : {
        type : String,
        label : "Code"
    },
    picture: {
        type: Array,
        optional: true
    },
    "picture.$": {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'postimg',
                label: 'Datei Auswählen',
                selectFileBtnTemplate: 'mySelectFileBtn',
                removeFileBtnTemplate: 'myRemoveFileBtn'
            }
        }
    },
    bgimg: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'worksimg',
                label: 'Datei Auswählen',
                selectFileBtnTemplate: 'mySelectFileBtn',
                removeFileBtnTemplate: 'myRemoveFileBtn'
            }
        }
    }
}))

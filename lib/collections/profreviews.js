Profreviews = new Mongo.Collection('profreviews');

var Schemas = {};

Schemas.Profreviews = new SimpleSchema({
    userId: {
        type: String,
        label: "User Id"
    },
    userName: {
        type: String,
        label: "User Name"
    },
    userUrl: {
        type: String,
        label: "User Url"
    },
    professorId: {
        type: String,
        label: "Professor Id"
    },
    professorName: {
        type: String,
        label: "Nombre Profesor"
    },
    courseCode: {
        type: String,
        label: "Course Code",
        min: 4,
        max: 8
    },
    help: {
        type: Number,
        label: "Help",
        min: 1
    },
    clarity: {
        type: Number,
        label: "Clarity",
        min: 1
    },
    easy: {
        type: Number,
        label: "Easy",
        min: 1
    },
    tags: {
        type: [String],
        label: "Tags"
        //optional: true
    },
    interest: {
        type: Number,
        label: "Interest",
        min: 1
    },
    txtuse: {
        type: Number,
        label: "Text Use",
        min: 1
    },
    grade: {
        type: String,
        label: "Grade"
    },
    mayor: {
        type: String,
        label: "Mayor"
    },
    credit: {
        type: String,
        label: "Por Credito"
    },
    comment: {
        type: String,
        label: "Comentario",
        min: 10,
        max: 450

    },
    createdAt: {
        type: Date,
        label: "Date",
        
    }
});

SimpleSchema.messages({
	required: "[label] es un campo obligatorio",
	minNumber: "El valor de [label] debe ser como minimo de [min]",
	minString: "[label] debe tener como minimo [min] caracteres",
	maxString: "[label] debe tener como minimo [max] caracteres"
});
    



Profreviews.attachSchema(Schemas.Profreviews);
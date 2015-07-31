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
        label: "Nombre del Profesor"
    },
    courseCode: {
        type: String,
        label: "Nombre del Curso",
        min: 4,
        max: 40
    },
    semester: {
        type: String,
        label: "Semestre",
    },
    year: {
        type: String,
        label: "Año",
    },
    help: {
        type: Number,
        label: "Ayuda al Alumno",
        min: 1
    },
    clarity: {
        type: Number,
        label: "Claridad para Enseñar",
        min: 1
    },
    easy: {
        type: Number,
        label: "Dificultad",
        min: 1
    },
    tags: {
        type: [String],
        label: "Tags"
        //optional: true
    },
    upVoters: {
        type: [String],
        label: "upVoters",
        optional: true
    },
    downVoters: {
        type: [String],
        label: "downVoters",
        optional: true
    },
    votes: {
        type: Number,
        label: "votes",
        optional: true
    },
    interest: {
        type: Number,
        label: "Interés",
        min: 1
    },
    txtuse: {
        type: Number,
        label: "Material de Apoyo",
        min: 1
    },
    grade: {
        type: Number,
        label: "Nota o Calificación",
        decimal: true,
        optional: true,
        min: 0,
        max: 7
        
    },
    mayor: {
        type: String,
        label: "Tu Carrera",
        optional: true,
        max: 35
    },
    recommend: {
        type: String,
        label: "Recomendarias"
    },
    eligible: {
        type: String,
        label: "Pudiste Elegirlo"
    },
    sexy: {
        type: String,
        label: "Sexy",
        optional: true
    },
    assistance: {
        type: String,
        label: "Asistencia"
    },
    comment: {
        type: String,
        label: "Comentario",
        min: 10,
        max: 450

    },
    createdAt: {
        type: Date,
        label: "Fecha de creacion",
        
    },
    editedAt: {
        type: Date,
        label: "Fecha de edicion",
        optional: true
        
    }
});

SimpleSchema.messages({
	required: "[label] es un campo obligatorio",
	minNumber: "El valor de [label] debe ser como minimo de [min]",
    maxNumber: "El valor de [label] debe ser como máximo de [max]",
	minString: "[label] debe tener como minimo [min] caracteres",
	maxString: "[label] debe tener como máximo [max] caracteres",
    expectedNumber: "[label] debe ser un número"
});
    



Profreviews.attachSchema(Schemas.Profreviews);
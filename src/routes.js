/* eslint-disable spaced-comment */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

const {
  addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler, 
  editNoteByIdHandler, 
  deleteNoteByIdHandler, 
} = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
      /*options : {
        cors : {
          origin : ['*']
        }
      }*/
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
    },
];
   
module.exports = routes;
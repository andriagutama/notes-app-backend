# Notes App Backend

## REST API using Node.js

REST API using Node.js, data saved in array and will be lost if server is off.

### Start Server

```
npm run start
```

server will run at http://localhost:5000/

### Add New Notes

```http
POST /notes
```

body

```javascript
{
    "title" : "Title of Notes",
    "tags" : "Tags of notes",
    "body" : "Body of notes"
}
```

response

```javascript
{
    "status": "success",
    "message": "Catatan berhasil ditambahkan",
    "data": {
        "noteId": "u2d8612rCspKjZaH"
    }
}
```
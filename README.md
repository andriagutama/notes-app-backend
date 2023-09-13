# Notes App Backend

## REST API using Node.js

REST API using Node.js, data saved in array and will be lost if server is off.

### Start Server

```
npm run start
```

server will run at http://localhost:5000/

### Add New Notes

<details>
    <summary>
        <code>POST</code> <code>/notes</code>
    </summary>

#### body

```javascript
{
    "title" : "Title of Notes",
    "tags" : "Tags of notes",
    "body" : "Body of notes"
}
```

#### response

```javascript
{
    "status": "success",
    "message": "Catatan berhasil ditambahkan",
    "data": {
        "noteId": "u2d8612rCspKjZaH"
    }
}
```
</details>

### Get All Notes

<details>
    <summary>
        <code>GET</code> <code>/notes</code>
    </summary>

#### response

```javascript
{
    "status": "success",
    "data": {
        "notes": [
            {
                "title": "Title of notes",
                "tags": "Tags of notes",
                "body": "Body of notes",
                "id": "u2d8612rCspKjZaH",
                "createdAt": "2023-09-13T03:45:03.584Z",
                "updatedAt": "2023-09-13T03:45:03.584Z"
            }
        ]
    }
}
```
</details>

### Get A Notes

<details>
    <summary>
        <code>GET</code> <code>/notes/{id}</code>
    </summary>

#### failed response

```javascript
{
    "status": "fail",
    "message": "Catatan tidak ditemukan"
}
```

#### success response

```javascript
{
    "status": "success",
    "data": {
        "note": {
            "title": "Title of notes",
            "tags": "Tags of notes",
            "body": "Body of notes",
            "id": "u2d8612rCspKjZaH",
            "createdAt": "2023-09-13T03:45:03.584Z",
            "updatedAt": "2023-09-13T03:45:03.584Z"
        }
    }
}
```
</details>

### Edit Notes

<details>
    <summary>
        <code>PUT</code> <code>/notes/{id}</code>
    </summary>

#### body

```javascript
{
    "title" : "Title of Notes",
    "tags" : "Tags of notes",
    "body" : "Body of notes"
}
```

#### failed response

```javascript
{
    "status": "fail",
    "message": "Gagal memperbarui catatan. Id tidak ditemukan"
}
```

#### success response

```javascript
{
    "status": "success",
    "message": "Catatan berhasil diperbarui"
}
```
</details>

### DELETE Notes

<details>
    <summary>
        <code>DELETE</code> <code>/notes/{id}</code>
    </summary>

#### failed response

```javascript
{
    "status": "fail",
    "message": "Catatan gagal dihapus. Id tidak ditemukan"
}
```

#### success response

```javascript
{
    "status": "success",
    "message": "Catatan berhasil dihapus"
}
```
</details>
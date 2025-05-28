# Items API - Express.js CRUD Application

This is a simple RESTful API built with Node.js and Express.js that manages a collection of items. It supports full CRUD functionality and uses `express-validator` for input validation and `uuid` for generating unique item IDs.

## Features

* Add new items with validation
* Retrieve all items
* Retrieve a single item by ID
* Update an existing item
* Delete an item by ID

## Technologies Used

* Node.js
* Express.js
* express-validator
* uuid

## Setup Instructions

### Prerequisites

* Node.js (v14 or later)
* npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:

   ```bash
   npm install express express-validator uuid
   ```
3. Create two files: `server.js` and `items.js` (or a folder named `routes/items.js`). Paste the server and route logic accordingly.
4. Start the server:

   ```bash
   node server.js
   ```
5. Server will run at `http://localhost:6000`

## API Endpoints

### Base URL

```
http://localhost:6000/items
```

### GET `/items`

Retrieve all items.

**Response:**

```json
[
  {
    "name": "Item1",
    "description": "A test item",
    "amount": 5,
    "itemId": "uuid-generated-id"
  }
]
```

### POST `/items`

Create a new item with validation.

**Body Parameters:**

```json
{
  "name": "Apple",
  "description": "Fresh fruit",
  "amount": 3
}
```

**Validation Rules:**

* `name`: at least 3 characters
* `description`: at least 3 characters
* `amount`: integer, minimum 1

**Success Response:**

```
Item with the name Apple added to the Data base
```

**Error Response:**

```json
{
  "errors": [
    {
      "msg": "name must be at least 3 character long",
      "param": "name",
      "location": "body"
    }
  ]
}
```

### GET `/items/:id`

Get a single item by its ID.

**Response:**

```json
{
  "name": "Apple",
  "description": "Fresh fruit",
  "amount": 3,
  "itemId": "uuid-generated-id"
}
```

### PUT `/items/:id`

Update an existing item.

**Body Parameters (partial or full):**

```json
{
  "name": "Updated Name",
  "description": "Updated description",
  "amount": 10
}
```

**Success Response:**

```
Item with the id <id> has been updated in the database
```

### DELETE `/items/:id`

Delete an item by its ID.

**Success Response:**

```
Item with the id <id> deleted from the database
```

## License

This project is open-source and free to use.

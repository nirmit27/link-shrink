# Link Shortener API

A simple and efficient **RESTful API** built with **Express.js** to shorten, manage, and retrieve URLs. This API enables users to generate short URLs, retrieve the original URLs, and redirect to the original webpage.

## Features

- Generates an **8-character** hash code for long URLs.
- Retrieves the original URL using the short code.
- Redirects to the original webpage using the short code.

## API Reference

### 1. Generate Short URL
Accepts a long URL in **JSON** format and returns an 8-character hash code as the shortened URL.
  ```http
  POST /shrink
  ```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `longUrl` | `string` | **Required.** The long URL to be shortened. |

**Request :**
```json
{  
  "longUrl": "https://example.com/long-url"  
}
```

**Response :**
```json
{  
  "shortCode": "example123"  
}  
```

### 2. Retrieve Original URL
Takes an 8-character hash code as a **path** parameter and returns the corresponding long URL.
  ```http
  GET /url/:code
  ```

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| `url`     | `string` | **Required.** 8-character hash code of the shortened URL. |

**Response :**
```json
{  
  "longUrl": "https://example.com/long-url"  
}
```


### 3. Redirect to Original URL
Redirects to the **original** long URL corresponding to the provided 8-character hash code.
  ```http
  GET /visit/:code
  ```

| Parameter | Type     | Description                                                   |
| :-------- | :------- | :------------------------------------------------------------ |
| `code`    | `string` | **Required.** The 8-character hash code of the shortened URL. |


## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/en/download)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Installation

  #### 1. Clone the repository :
  ```bash
  git clone https://github.com/nirmit27/link-shrink.git
  ```

#### 2. Navigate to the project directory :
  ```bash
  cd link-shrink
  ```

#### 3. Install dependencies :
  ```bash
  npm install
  ```

#### Running the development server
  ```bash
  node index.js
  ```
The **API** will be available at http://localhost:3000.

## Tech Stack

[![Node.js](https://img.shields.io/badge/Nodejs-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)&nbsp;
[![Express.js](https://img.shields.io/badge/Expressjs-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)&nbsp;
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)&nbsp;
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

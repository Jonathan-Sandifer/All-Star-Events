# APIs

## Events:

## List Event

* **Method**: `GET`
* **Path**: /api/events

Output:

```json
{
  "id": int,
  "name": string,
  "city": string,
  "state": string,
  "description": string,
  "picture_url": string
}
```

Listing an Event uses the incoming city and state data to query 
an image



## Trails

## List Trails:

* **Method**: `GET`
* **Path**: /api/trails


Output:

```json
{
  "id": int,
  "name": string,
  "city": string,
  "state": string,
  "description": string,
  "picture_url": string
}
```

Listing a trail uses 

## Weather

## List Weather:

* **Method**: `GET`
* **Path**: /api/events

Output:

```json
{
  "id": int,
  "name": string,
  "city": string,
  "state": string,
  "description": string,
  "picture_url": string
}
```
Listing the weather 

## Users:

## Create a new user

* **Method**: `POST`
* **Path**: /api/users

Input:

```json
{
  "name": string,
  "email": text,
  "password":  text
}
```
Creating a user asks the user to input a username, email, and password to create an account on the webpage
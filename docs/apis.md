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

Listing an Event uses the city and state data that has queried
an image url, with a description and a unipue id. 



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

Listing a trail uses the city and state data that has queryied
an image url, with a description and a unipue id. 


## Weather

## List Weather:

* **Method**: `GET`
* **Path**: /api/weather

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
Listing the weather uses the city and state data that has queryied
an image url, with a descriptionand a unipue id. 

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
Output:

```json
{
  "id": int,
  "name": string,
  "email": text,
  "password":  text
}
```
Creating a user asks the user to input a username, email, and password to create an account on the webpage, with a unique id in the database.
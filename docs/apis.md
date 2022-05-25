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

Input:

```json
{
  "name": string,
  "city": string,
  "state": string
}
```

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

Creating a new Event uses the incoming city and state
data to query an image API to get a URL for an image for
the location. Then, it saves the name, city, state, and
image URL to the database. It returns all of the data
with the new database id.
# Data models

## User

| Name | Type | Unique | Optional |
|-|-|-|-|
| id | integer | yes | no |
| name  | string | no | no |
| email | string | yes | no |
| username | string | yes | no |
| password | string | yes | no |
| preferences | reference to preference entity | no | no |


The `user` entity contains the data about a user w/ a relationship to preferences 

## Preferences 

| Name | Type | Unique | Optional |
|-|-|-|-|
| id | integer | yes | no |
| parks  | bool | no | no |
| trails | bool | no | no |
| sports | bool | no | no |
| festivals | bool | no | no |
| concerts  | bool | no | no |
| museums | bool | no | no |
| art | bool | no | no |
| water activities  | bool | no | no |
| concerts | bool | no | no |
| tours | bool | no | no |

-- could add more preferences when we think of them 

The `preference` entity contains the data specific to a user and their preferred activities. When a user selects their preferences they get shown specific things based off their preferences 

## Location

| Name | Type | Unique | Optional |
|-|-|-|-|
| id | integer | yes | no |
| name | string | no | no |
| city | string | no | no |
| state | reference to State entity | no | no |
| picture_url | string | no | yes |
| weather | reference to imported weather data | no | no|

The `location` entity contains the data about a location
that an event or activity is available at.

## Event/activity 

| Name | Type | Unique | Optional |
|-|-|-|-|
| id | integer | yes | no |
| name | string | no | no |
| description | string | no | no |
| date | datefield | no | no |
| time | timefield | no | no |
| picture_url | string | no | yes |
| location | reference to location entity | no | no |

The `event` entity contains the data about a specific event





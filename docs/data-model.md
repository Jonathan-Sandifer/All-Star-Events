# Data models

## Location

| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| city | string | no | no |
| state | reference to State entity | no | no |
| picture_url | string | no | yes |

The `location` entity contains the data about a location
that an event or activity is available at.

## Event

| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| date | string | no | no |
| time | string | no | no |
| picture_url | string | no | yes |

The `event` entity contains the data about an event
containing the name, date, time, and a picture.

## User

| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | no | no |
| password | string | no | no |
| email | string | no | no |

The `user` entity contains the data about a user
containing the username, password and email.

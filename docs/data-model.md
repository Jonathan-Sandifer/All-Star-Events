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
| location | foreign key to location | yes | no |


The `user` entity contains the data about a user w/ a relationship to preferences 

## Preference 

| Name | Type | Unique | Optional |
|-|-|-|-|
| id | integer | yes | no |
| name  | string | no | no |

-- could add more preferences when we think of them 

The `preference` entity contains the data specific to a user and their preferred activities. When a user selects their preferences they get shown specific things based off their preferences 


## Event/activity 

| Name | Type | Unique | Optional |
|-|-|-|-|
| id | integer | yes | no |
| name | string | no | no |
| description | string | no | no |
| timestamp | date/timefield| no | no |
| picture_url | string | no | yes |
| location | string | no | no |

The `event` entity contains the data about a specific event saved by the user 

## Parks 

| Name | Type | Unique | Optional |
|-|-|-|-|
| id | integer | yes | no |
| name | string | no | no |
| description | string | no | no |
| timestamp | date/timefield| no | no |
| picture_url | string | no | yes |
| location | string | no | no |

The `parks` entity contains the data about a specific park saved by the user 


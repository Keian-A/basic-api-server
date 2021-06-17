# Basic API Server
#### Keian Anthony

## Route information:

### /food
#### GET
- Status Code 200
- JSON response:
  - Returns and array of `Food` containing
    - name: STRING
    - calories: NUMBER
#### POST
- Status Code 200
- JSON response:
  - Creates a new Food item
  - Returns a newly created Food item containing:
    - name: STRING
    - calories: NUMBER
### /food/:foodId
#### GET
- Status Code 200
- JSON response:
  - Returns a single instance Food based on the foodId containing:
    - name: STRING
    - calories: NUMBER
#### PUT
- Status Code 200
- JSON response:
  - Updates a single instance of Food based on the foodId, returns newly updated item containing:
    - name: STRING
    - calories: NUMBER
#### DELETE
- Status Code 204
- Removes a single instance of Food based on the foodId, no body:

`Above format taken from class demo, and applicable to half of this application`

### /car
#### GET
- Status Code 200
- JSON response:
  - Returns and array of `Car` containing
    - name: STRING
    - calories: NUMBER
#### POST
- Status Code 200
- JSON response:
  - Creates a new Car item
  - Returns a newly created Car item containing:
    - name: STRING
    - calories: NUMBER
### /car/:carId
#### GET
- Status Code 200
- JSON response:
  - Returns a single instance Car based on the carId containing:
    - name: STRING
    - calories: NUMBER
#### PUT
- Status Code 200
- JSON response:
  - Updates a single instance of Car based on the carId, returns newly updated item containing:
    - name: STRING
    - calories: NUMBER
#### DELETE
- Status Code 204
- Removes a single instance of Car based on the carId, no body:

Live deployment: [Here](https://keian-basic-api-server.herokuapp.com/)
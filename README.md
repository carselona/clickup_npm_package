
## Description

A Node.js wrapper for the Clickup APIs mainly involving operations related to tasks(create, update etc) and corresponding format.




## Install

npm install delxo_clickup_apis

## Usage

to perform operations such as creating tasks, you need apikey which you can get by following [ clickup docs ]( https://clickup.com/api/ ) , and list ids for different lists . then you need to setup a config file in your app which contains ids for different fields such as email, phone, pincode etc ( or any other data you want to pass ) to perform operations related to tasks

## Note
 1. ```clickupconfig.json```  file should be defined in root folder
 2. to get the data(s) for various custom fields, we need ```clickupconfig.json ``` file.

config file should look like this:

#### clickupconfig.json :

```{
    "apikey": "*****************************************",
    "mail"             : "************************************",
    "car_model"        : "************************************",
    "status"           : "************************************",
    ......             : ......
    ......             : ......
    ......             : ......
    ......             : ......
    ......             : ......
}
```


In your project, initialize an instance of delxo_clickup_apis:

```const { FormatClickupCarselona } = require('delxo_clickup_apis');
const { TasksClickupCarselona } = require('delxo_clickup_apis');
``` 
//now import the clickupconfig.json file as shown below : 

```import * as configdata  from '../clickupconfig.json';
```
now using the config file, create inputdata as shown in below format:
```
inputdata = {
    "name"        : "dummy name",
    "description" : "dummy description",
    ...
    ...
    ...
    custom: {
        "dummyemail@gmail.com" : configdata.email ,    //  
        "7355xyzw56"           : configdata.phone ,    //   
        "dummypincode"         : configdata.pincode ,  // 
        ......
        ......
        ......
    }
   
}
```

this inputdata will be passed to corresponding format function defined under FormatClickupCarselona class and the appropriate format will be returned.
this returned output will then be passed to creattask function defined under TasksClickupCarselona class.

step by step example is shown below

# Example:

## Note
  suppose you have defined ```clickupconfig.json``` file as your config file.
 

```const { FormatClickupCarselona } = require('delxo_clickup_apis');
   const { TasksClickupCarselona } = require('delxo_clickup_apis');
import * as data  from '../clickupconfig.json'; 
```
### make sure you define the path of clickupconfig correctly

now using ```clickupconfig.json ``` file, you need to define inputdata in below format,

```var inputdata = {
  'name':'dummy',
  'description':'testing purpose',
  ....
  ....
  ....
  'custom':{
    "sahoorashmiranjan11@gmail.com"         :  data.mail,
    "Audi"                                  :  data.car_model,

    ..........
    ..........
    ..........
    ..........
  }
}
```

```var outputdata = FormatClickupCarselona.<format function name>(inputdata);
```
above outputdata is in appropriate format to perform operations related to tasks as defined under TasksClickupCarselona class as shown below:

  ```var result: any = await TasksClickupCarselona.createTaskR( process.env.list_id ,outputdata ,'thirdparty',process.env.clickupapikey);
  ```

## Disclaimer:
list_ids for different tasks and apikey will be stored in .env file.







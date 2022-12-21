
## description

A Node.js wrapper for the Clickup APIs mainly involving operations related to tasks(create, update etc) and corresponding format.




## Install

npm install clickupcarselonaapis

## Usage

to perform operations such as creating tasks, you need apikey which you can get by following [ clickup docs ]( https://clickup.com/api/ )clickup docs, and list ids for different tasks. then you need to setup a config file in your app which contains ids for different fields such as email, phone, pincode etc ( or any other data you want to pass ) to perform operations related to tasks

## Note
 1. clickupconfig.json file should be defined in root folder
 2. to get the data(s) for various custom fields, we need clickconfig.json file.

config file should look like this:

#### clickupconfig.json :

```{
    "apikey": "pk_3390193_QNGHCQSGQF51TO8123C6ILT5O6CWF0YJ",
    "mail"             : "06205980-a7c6-43e5-80cf-c2175169d71d",
    "car_model"        : "0ae5fd69-71bb-46a9-a5a6-b7ad3d93cfe7",
    "status"           : "2f1875a7-f6fd-4787-a1e9-0b7bf614d53b",
    ......             : ......
    ......             : ......
    ......             : ......
    ......             : ......
    ......             : ......
}
```


In your project, initialize an instance of clickupcarselonaapis:

```const { FormatClickupCarselona } = require('clickupcarselonaapis');
const { TasksClickupCarselona } = require('clickupcarselonaapis');
``` 
//now import the clickupconfig.json file as shown below : 

```import * as configdata  from '../clickupconfig.json';
```
now using the config file, create inpputdata as shown in below format:
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

# example:

## Note
  suppose you have defined clickupconfig.json file as your config file.


```const { FormatClickupCarselona } = require('clickupcarselonaapis');
const { TasksClickupCarselona } = require('clickupcarselonaapis');
import * as data  from '../clickupconfig.json'; 
```
### make sure you define the path of clickupconfig correctly

now using clickupconfig.json file, you need to define inputdata in below format,

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
this outputdata is in appropriate format to perform operations related to tasks as defined under TasksClickupCarselona class as shown below:

  ```var result: any = await TasksClickupCarselona.createTaskR( process.env.list_id ,outputdata ,'thirdparty',process.env.clickupapikey);
  ```

## Disclaimer:
list_ids for different tasks and apikey will be stored in .env file.







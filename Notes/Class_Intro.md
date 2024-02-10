# Class Based Components

## What is Class ?

- Class is basically a combination of Object and Function in Javascript
- It is generally treated as a syntatical sugar
- It can be used mainly for creating scalable and re-usable code as it helps to encapsulate all necessary states and methods in one place and make it available across application.
- Class in JS is generally not the exact same class as in pure Object Oriented Languages like Java
- Class in JS helps to link one object with another easily and share methods/states
- React opted to go with classes so as to make the components re-usable easily

## Anatomy of Class in JS ?

- class is a keyword which represents class in JS
- class has a name to represent the object
- class has a special function called constructor which is a function which gets exectued when a class is called.
- constructor is responsible for initialising variables in the class
- class contains variables and methods
- class can inherit variables and methods from another class by extending
- For extending a class with another class we make use of another keyword called extends
- When a class is extended we would need to invoke the constructor of the other class by using a function called super.
- super is a keyword which is responsible for invoking the other class constructor and define the this object.
- in-order to use the variables/methods in class we make use of this keyword as it would represent the class instance
- JS doesn't allow multiple or multilevel inheritance.

## Example of Class

```
class MircoserviceInit {
  constructor(serviceName,serviceDB) {
    serviceName: '',
    serviceDB: ''
  }
  createDB() {
    console.log(`Creating DB for ${this.serviceName}`)
  }
}
```

```
class uploadService extends MicroserviceInit {
  constructor(serviceName,dbName) {
    super()
  }
  upload() {
    this.createDB();
    console.log('Function for Uploading Docs')
  }
}
```

```
const uploadImageService = new uploadService('UploadImageService','MonogDB');
uploadImageService.upload();
```

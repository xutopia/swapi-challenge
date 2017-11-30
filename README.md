# Star Wars App

Are you a Star Wars fan who loves to brag about which character has appeared in which film? Test your knowledge with this Star Wars app that allows you to select a character and display all movies and release dates that the character has appeared in. Please give the app a try and as always, we are looking for questions, comments, suggestions, or feedback of any kind. Drop us a note at [xuology@gmail.com](xuology@gmail.com).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get started, make sure you are in the root directory of this project. All instructions below are assuming you are using a Linux/Unix environment. Below please find a list of resources and version number you will need before you begin.

```
- Node.js 8.3.0
- npm 5.5.1
- git 2.7.4
```

If you do not have any of the resources listed above, [here is a great blog post](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/) with instructions on installing Node.js, and npm.

To install git, [here is the git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


### Installing

A step by step series of examples that tell you have to get a development env running. Make sure you are starting in the root directory of this project.

Install project dependencies

```
$ npm install
```

To run a dev server and see the app in your browser

```
$ npm run dev
```

If you are running a dev server, make sure you have a separate bash shell open and run the following

```
$ npm run start:dev
```

To run a bundled production app locally

```
$ npm run build
$ npm start
```

Open your favorite browser and visit [localhost:8080](localhost:8080) if you are running the dev environment, or visit [localhost:8000](localhost:8000) if you are running the bundled app.


## Running the tests

### Unit Tests

Unit tests in this directory are a work in progress. It is recommended that any development moving forward should embrace TDD and start with writing tests.
To run the tests:

```
$ npm test
```


## Deployment

This app is deployed on AWS Elastic Beanstalk, and can be accessed via [this link](bitly.com/star-wars-tonyxu). For guidance on deploying your own version, please visit [AWS](https://aws.amazon.com/) for more information.


## Built With

* [Express](https://maven.apache.org/) - Server framework
* [React.js](https://reactjs.org/) - Front end framework
* [Node.js](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Jest](https://facebook.github.io/jest/) - Testing

## Contributing

* Fix test errors
* Update styling
* Convert app to server-side React to improve SEO, server side routing, etc
* Add more unit tests
* Add other testing frameworks for integration and end-to-end tests
* Ensure 100% code coverage, fix errors


## Versioning

[git](https://git-scm.com/) was for versioning.

## Authors

* **Tony Xu** - *Initial work* - [xutopia](https://github.com/xutopia/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

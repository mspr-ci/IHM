# IHM 

Front-end

![Gitlab pipeline status](https://img.shields.io/gitlab/pipeline/Manon-Rbd/mspr-ci-application)
![Dependencies](https://img.shields.io/david/mspr-ci/IHM)


Suivez l'équipe sur Twitter !

![Suivez Riwal sur twitter !](https://img.shields.io/twitter/follow/LeFaou?style=social)
![Suivez Manon sur twitter !](https://img.shields.io/twitter/follow/manon_rambaud_1?style=social)
![Suivez Simon sur twitter !](https://img.shields.io/twitter/follow/SPerols?style=social)
![Suivez Martin sur twitter !](https://img.shields.io/twitter/follow/martin_gadan?style=social)

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    npm install

We use npm scripts and [Webpack][] as our build system.

    npm start

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `npm update` and `npm install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `npm help update`.

The `npm run` command will list all of the scripts available to run for this project.


### Using Angular CLI

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

## Testing

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    npm test

For more information, refer to the [Running tests page][].


This application was generated using JHipster 6.7.1, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.7.1](https://www.jhipster.tech/documentation-archive/v6.7.1).

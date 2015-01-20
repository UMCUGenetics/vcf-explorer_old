# vcf-explorer web app

## Requirements
- [nodejs](http://nodejs.org/)
- [bower](http://bower.io/)
- [grunt](http://gruntjs.com/)

### Install development environment

```sh
  cd /path/to/vcf-explorer/src
  npm install
  bower install
```
### CP and edit config.default.js

```sh
  cp src/app/scripts/config.default.js src/app/scripts/config.js
```
Change couchdbURL to your local couchdb installation.

### Run the development server

```sh
  cd /path/to/vcf-explorer/src
  grunt serve
```

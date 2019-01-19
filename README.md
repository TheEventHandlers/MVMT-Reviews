# Project Name

> Project description

## Related Projects

  - https://github.com/SDC-Group-2/MVMT-summary
  - https://github.com/SDC-Group-2/MVMT-details-specs
  - https://github.com/SDC-Group-2/MVMT-product-photos

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Start with Postgres:
```sh
  npm run build
  npm run seed-pg
  npm run start-pg
 ```
 
Start with MongoDB (Deprecated):
  ```sh
  mongod
  npm run build
  npm run seed-mongo
  npm run start-mongo
 ```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


# personal-project-backend
this is a backend api (JSON API) for personal project

# building with docker
docker build -t jedrula-nodejs-backend .
docker tag jedrula-nodejs-backend jedrula/jedrula-nodejs-backend
docker push jedrula/jedrula-nodejs-backend

#### config
this service uses https://www.npmjs.com/package/config for managing configuration

by default you will find in the ./config/default.js that mongoDbLocation is expected to be on the localhost:27017/jedrek

you can change it by providing a config file like production.js and spinning up the server like 
```
NODE_ENV=production node index.js 
NODE_ENV=local node index.js 
```

#### TODO WRITE PROPER DOCS ABOUT MongoDb prerequisite
you will need to install and spin up mongod server with something along the lines of `mongod`

#### to download the code and spin the server

1. copy contents of https://github.com/jedrula-communications/personal-project-backend/blob/master/bin/build to a file on the server like build_personal-project-backend

2. sh build_personal-project-backend

3. cd personal-project-backend-master

4. spin it
```
node index.js
```

4.1. ... as a service
```
sudo forever-service install personal-project-backend-master --script index.js -e "NODE_ENV=production"
sudo service personal-project-backend-master start
```

[more on that here](https://github.com/zapty/forever-service)


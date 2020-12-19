# Simple User Authentication

### To Run
```
npm install
sudo docker build -t tims-machine/node-auth-app .
sudo docker volume create --name nodemodules
sudo docker run -p 3003:3003 --name auth-app-server -v `pwd`:/usr/src/app -v nodemodules:/usr/src/app/node_modules tims-machine/node-auth-app
curl -i localhost:3003
```

### Helpful Docker Commands
```
sudo docker ps
sudo docker logs <container-id>
sudo docker exec -it <container-id> /bin/sh
sudo docker stop <container-id>
```

### Resources
[Starter Code](https://github.com/WebDevSimplified/nodejs-user-permissions/tree/master/before)
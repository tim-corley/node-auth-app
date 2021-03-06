# Simple User Authentication

This is an API built with Express that demonstrates protected routes / user authentication.

### To Run
```
npm install
sudo docker build -t tims-machine/node-auth-app .
sudo docker volume create --name nodemodules
sudo docker run -p 3003:3003 --name auth-app-server \
> -v `pwd`:/usr/src/app \
> -v nodemodules:/usr/src/app/node_modules \
> tims-machine/node-auth-app
curl -i localhost:3003
```
### Helpful Docker Commands
```
sudo docker ps
sudo docker logs <container-id>
sudo docker exec -it <container-id> /bin/sh
sudo docker stop <container-id>
```

### Make HTTP Requests w/ cURL
```
curl --header "Content-Type: application/json" \
 --request GET \
 --data '{"userId": 1}' \
 localhost:3003/dashboard

 curl --header "Content-Type: application/json" \
 --request GET \
 --data '{"userId": 2}' \
 localhost:3003/admin

 curl --header "Content-Type: application/json" \
--request GET \
--data '{"userId": 1}' \
localhost:3003/projects | json_pp
```

### Resources
[Starter Code](https://github.com/WebDevSimplified/nodejs-user-permissions/tree/master/before)
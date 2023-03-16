#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontet.com/nvm-sh/nvm/v0.34.0/install.sh | bash 
nvm install node

#create owr working directory if it doesnt exist 
DIR="/home/ec2-user/express-app"
if [-d "${DIR}"];then
    echo "${DIR} exists"
else
 echo "Creating ${DIR} directory"
 mkdir ${DIR}
 fi
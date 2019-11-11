
# FROM ubuntu:18.04
# #You can start with any base Docker Image that works for you

# RUN echo "#!/bin/bash\n" > /startscript.sh
# RUN echo "apt-get update\n" >> /startscript.sh
# RUN echo "apt-get install curl gnupg -yq\n" >>/startscript.js
# RUN echo "curl -sL https://rpm.nodesource.com/setup | bash -\n" >>/startscript.js
# RUN echo "apt-get install nodejs -yq\n" >> /startscript.sh
# RUN echo "apt-get install -y npm\n" >> /startscript.sh
# RUN echo "npm install -g n\n" >> /startscript.sh
# RUN echo "n latest\n" >> /startscript.sh
# RUN echo "node --version\n" >> /startscript.sh
# RUN echo "npm --version\n" >> /startscript.sh
# RUN echo "apt-get install -y git-core\n" >> /startscript.sh
# RUN echo "git --version" >> /startscript.sh
# RUN echo "git clone https://github.com/RohiniVknowLab/nestjs.git\n" >> /startscript.sh
# RUN echo "cd nestjs\n" >> /startscript.sh
# RUN echo "git pull origin master\n" >> /startscript.sh
# RUN echo "npm install\n" >> /startscript.sh
# RUN echo "npm run start:dev\n" >> /startscript.sh

# RUN chmod +x /startscript.sh

# CMD /startscript.sh

FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8000

CMD npm run start:dev
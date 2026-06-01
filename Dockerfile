FROM node:18

WORKDIR /home/sathishs/devops_linux_v1

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]

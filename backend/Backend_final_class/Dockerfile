# Use a imagem oficial do MySQL como base
FROM mysql:8

# Defina as variáveis de ambiente para configuração do MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=exemplo

# Expõe a porta 3306 do contêiner para o host
EXPOSE 3306

# Define um volume para persistir os dados do MySQL
VOLUME /var/lib/mysql

# Define o comando de inicialização do contêiner
CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]

FROM node:18-alpine

WORKDIR /home/node/app

EXPOSE 3000

HEALTHCHECK --interval=30s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:3000/healthcheck || exit 1

COPY package.json package-lock.json ./

RUN npm install \
    && npm cache clean --force  

COPY . .

CMD [ "npm", "run", "start" ]

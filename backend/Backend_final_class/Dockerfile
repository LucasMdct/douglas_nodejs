FROM node:18-alpine

WORKDIR /home/node/app

EXPOSE 3000

HEALTHCHECK --interval=30s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:3000/healthcheck || exit 1

# Instalação das dependências do Node.js
RUN apk add --no-cache --virtual .build-deps \
    gcc \
    g++ \
    make \
    python3

# Instalação do pacote mysql2
RUN apk add --no-cache mariadb-connector-c-dev \
    && npm install mysql2 \
    && apk del .build-deps
#MySQL é implantado e disponível como srv-captain--db1-db:3306 para outros aplicativos. Por exemplo, com NodeJS, você faz 'var con = mysql.createConnection({ host: 'srv-captain--db1-db', user: 'root', password: '*********' }) ;'
# Define as variáveis de ambiente para a conexão com o MySQL
ENV MYSQL_HOST=0.0.0.0
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=12345678
ENV MYSQL_DATABASE=exemplo

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia os arquivos restantes para o diretório de trabalho
COPY . .

CMD [ "npm", "run", "start" ]
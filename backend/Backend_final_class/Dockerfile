FROM node:18-alpine

WORKDIR /home/node/app

EXPOSE 3000

HEALTHCHECK --interval=30s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:3000/healthcheck || exit 1

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instale as dependências do Node.js, incluindo o pacote mysql2
RUN apk add --no-cache --virtual .build-deps \
    gcc \
    g++ \
    make \
    python3 \
    && npm install \
    && npm install mysql2 \
    && npm cache clean --force \
    && apk del .build-deps
    
# Define a senha do MySQL
ENV MYSQL_ROOT_PASSWORD 12345678

# Cria o banco de dados
ENV MYSQL_DATABASE exemplo

# Copie os arquivos restantes para o diretório de trabalho
COPY . .

CMD [ "npm", "run", "start" ]

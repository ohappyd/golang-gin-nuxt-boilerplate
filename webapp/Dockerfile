FROM node:14.17.0-alpine


# définit le dossier 'app' comme dossier de travail
WORKDIR /usr/src/dashboard
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json /usr/src/dashboard

# installe les dépendances du projet
RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

# construit l'app pour la production en la minifiant
EXPOSE 3031
CMD [ "yarn", "build" ]

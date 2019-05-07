# plateforme-educative

---

## Installation for dev

#### Install dependencies

With yarn :

```
yarn
```

with npm :

```
npm i
```

## Installation for prod

#### Install Docker

```bash
sudo apt-get update
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
sudo apt-get update
sudo apt-get install -y docker-engine
```

#### Install docker-compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### Build the app

```
docker-compose build
```

---

## Usage

#### Dev

With yarn :

```
yarn start
```

With npm :

```
npm run start
```

Will run webpack client on the port 3000 and the api on the port 4000

#### Prod

```
docker-compose up
```

Can be used with the --build flag to rebuild the app

Will expose the builded version on the port 80. can

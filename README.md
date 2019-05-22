# O'Children

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

!! Important !! You need to install this extension or it will not work :

[For chrome / Chromium based](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr)

[For firefox](https://addons.mozilla.org/fr/firefox/addon/reduxdevtools/)

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

---

## Usage

#### Dev

Will run webpack dev serveur on the port 3000 :

With yarn :

```
yarn start
```

With npm :

```
npm run start
```

You can also do it with docker :
```
docker-compose up
```

#### Prod

Will expose the builded version on the port 80 :
```
yarn prod
```

If you don't want to do it with docker you can do :
```
bash run.sh
```



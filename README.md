# Install Sonarqube 


## Step 1 - Install Docker
https://docs.docker.com/engine/install/
 
## Step 2 - Pull Sonarqube image from docker
```bash
$ docker image pull sonarqube:latest
```

## Step 3 - Run Sonarqube docker container
```bash
$ docker container run -d --name sonarqube -p 9000:9000 sonarqube:latest
```

## Step 4 - Open it in browser and login in with username: admin, password: admin
```bash
Example: http://ip_address:9000
```

## Step 5 - Create a new project
![alt text](https://github.com/pedrocarrijo95/NodejsDemo/blob/master/imgs/createproject2.PNG)

## Step 6 - Generate Token and select the options of your project
```bash 
- Generate Token
```
![alt text](https://github.com/pedrocarrijo95/NodejsDemo/blob/master/imgs/generatetoken.PNG)
```bash 
- Select options of your project, download sonar-scanner and add the **bin** directory to the **PATH** environment variable
- The last step is run sonarqube with command that show to you inside the folder of project sample
```
![alt text](https://github.com/pedrocarrijo95/NodejsDemo/blob/master/imgs/configs.PNG)


## Step 7 - Install git and clone the sample project
```bash
$ sudo yum install git-all **OR** sudo apt-get install git-all
$ git clone https://github.com/pedrocarrijo95/NodejsDemo
```




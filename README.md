# Description 

This repo is for the coding exercise proposed by Couchsurfing team.

## Couchsurfing exercise instructions

**Instructions**

- Create a new repo on github.com and push the exercise once complete
- Please complete the following without leveraging code interpreter, copilot, etc.. to complete the key parts of the exercise. We want to see your style coming through.
- Complete the exercise in whatever language you feel most comfortable in
- Please limit the scope to the ask as much as possible and no more than 2 hours.
- Reply to the email once complete with the link to the repo within 2 to 3 days.


**Create a basic REST API that runs as a docker container and does the following:**

- Has a resource that is a user :white_check_mark: 
- User should have an attribute that describes its relationship to other uses (think friends) :white_check_mark:
- Seeds user data (static list or DB whichever is preferred) :white_check_mark:
- Serves CRUD endpoints for the user resource :white_check_mark:
- Has an additional endpoint that finds the relationship distance from one user to another user (this user is a 2nd, 3rd, distance relationship) :white_check_mark:


## My development step by step

- [x] Create Github project
- [x] Start NestJS Project
- [x] Configure Docker with Neo4J and NestJS API
- [x] Add neo4J package, configure Module and test connection
- [x] Seed Route
- [x] Test query
- [x] Create User Route
- [x] Add Class-validator
- [x] Update User Route
- [x] Add User Connection Route
- [x] Delete User Route
- [ ] Remove User Connection Route
- [x] Connection Distance Route
- [ ] User Connections Route
- [ ] APIary Docs
- [x] ReadME to run project

Some routes are not develoo for avoid timing consuming
## Running the app

First, clone the project from Github:

```bash

$ git clone git@github.com:eduardoguilarducci/couchsurfing-social.git

```
Then, on the root folder of the project, run docker-compose to build up, generate images and run the apps:


```bash

$ docker-compose up

```

WARNING: If its the first time that you run the docker images, You WILL receive an error: *The client is unauthorized due to authentication failure.*

![alt text](https://github.com/eduardoguilarducci/couchsurfing-social/blob/main/error.png?raw=true)

It happens because of the Neo4J security and best practices to avoid using the default password in production.

Go to your brower and navigate to:

http://localhost:7474/browser/ and change the password to 'abc12345678'

The default user and password: 'neo4j' | 'neo4j'

![alt text](https://github.com/eduardoguilarducci/couchsurfing-social/blob/main/default_pass_change.png?raw=true)

After that, the app will be up and running


![alt text](https://github.com/eduardoguilarducci/couchsurfing-social/blob/main/running.png?raw=true)

## Seed 

Call the '/app/setup' route, to populate neo4j database with initial records to make this. 

Now everything looks good:

![alt text](https://github.com/eduardoguilarducci/couchsurfing-social/blob/main/user_nodes.png?raw=true)

## Routes

Routes available at collection attached to the e-mail ;)

## Stay in touch

- Author - [Eduardo Guilarducci](https://www.linkedin.com/in/eduardoguilarducci/)


# VUTTR API

An application is a simple repository for selecting tools with their
names, links, descriptions and tags.

## Getting Started

For prerequisites you need to have installed **docker** and **docker-composer** to run the application. And a client rest to test it, like, **postman** or **insomnia**.

### Prerequisites

```
- git
- Docker
- Docker-composer
- Client Rest (postman or insomnia)
```

### Installing

**1. Step**: Clone and access the project folder.

```
git clone https://github.com/PdziM/vuttr.git
cd vuttr
```

**2. Step**: Rename the **.env.example** file to **.env** and add your secret key to the APP_SECRET environment variable.

**3. Step**: Run the command **docker-compose up -d** in the project folder to mount the whole environment and go up our application.

```
docker-compose up -d
```

Done this. The application is running on port 3000.

## Endpoints

| Uri                             | Method | Protected | Description                                         |
| ------------------------------- | ------ | --------- | --------------------------------------------------- |
| http://localhost:3000/users     | POST   | NO        | Create user for login.                              |
| http://localhost:3000/sessions  | POST   | NO        | Create session with token JWT.                      |
| http://localhost:3000/tools     | GET    | YES       | List all tools and query parameters tag for filter. |
| http://localhost:3000/tools     | POST   | YES       | Create tool.                                        |
| http://localhost:3000/tools/:id | GET    | YES       | List one tool.                                      |
| http://localhost:3000/tools/:id | PUT    | YES       | Update one tool.                                    |
| http://localhost:3000/tools/:id | DELETE | YES       | Delete one tool.                                    |
| http://localhost:3000/docs      | GET    | NO        | Application documentation.                          |

> Access http://localhost:3000/docs for more details on the endpoints.

## Built With

- [NodeJs](https://nodejs.org/en/) - The back-end application
- [Express.js](https://expressjs.com/) - The framework back-end application
- [MongoDB](https://www.mongodb.com/) - The database
- [Docker](https://www.docker.com/) - The environment
- [API Blueprint](https://apiblueprint.org/) - The doc API

## Authors

- **Octavio Luiz** - [GitHub](https://github.com/PdziM)

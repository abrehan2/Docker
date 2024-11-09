# Docker Compose Overview

Docker Compose is a tool that allows you to manage multiple containers as a single application, simplifying the setup and orchestration of containerized services. To configure Docker Compose, create a `.yml` file specifying all service configurations.

---

## Docker Compose Configuration

Below is an example `docker-compose.yml` configuration file for a simple setup with two services: an application (`app`) and a MongoDB database (`mongo`).

```yml
services:
  app:
    container_name: app
    restart: always
    build:
    ports:
      - "4000:4000"
    links:
      - mongo
  mongo:
    container_name: mongo
    image: mongo
    volumes:
      - ./data:/data/db
    ports:
      - "27017:27017"
```

# Explanation of Configuration

## Version
- **`version: '1'`**: Specifies the version of the `docker-compose` format. This example uses version 1, which is an older format. In most cases, version 3 is preferred for modern features and compatibility with newer Docker versions.

## Services
This file defines two services: `app` (the main application) and `mongo` (a MongoDB database).

### Service: `app`
The `app` service sets up the main application container with the following configurations:
- **`container_name: app`**: Names the container `app` rather than assigning a random name.
- **`restart: always`**: Ensures that the container restarts automatically if it stops or crashes.
- **`build`**: Specifies the build context for the application (e.g., `.` or a path to a Dockerfile). Note that this field is empty here, so the image will not be built unless defined.
- **`ports: "4000:4000"`**: Maps port 4000 on the host to port 4000 within the container, allowing external access to the application.
- **`links`**: Connects the `app` container to the `mongo` container, making it accessible via the hostname `mongo` within the `app` container.

### Service: `mongo`
The `mongo` service defines a MongoDB container with the following configurations:
- **`container_name: mongo`**: Names the container `mongo`.
- **`image: mongo`**: Uses the MongoDB image from Docker Hub.
- **`volumes: ./data:/data/db`**: Mounts the host directory `./data` to `/data/db` inside the container, allowing data persistence for MongoDB.
- **`ports: "27017:27017"`**: Exposes MongoDB on its default port (27017) on the host machine.

To start the containers and apply the configurations, run the following command:

```yml
docker-compose up
```

If you want to run a specific service, use the following command:

```yml
docker-compose up -d mongo
```

To view logs for a specific container, run the following command, replacing container_id with the actual ID of your container:

```yml
docker logs <container_id>
```
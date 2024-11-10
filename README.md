# Swarm

A tool installed and enabled by default with Docker that manages clusters of nodes (each with multiple containers). The machines in the swarm can be physical or virtual and are referred to as nodes. It also performs load balancing across nodes.

---

To initialize a Docker node as a swarm manager, use the following command:

```yml
docker swarm init
```

To view detailed information about containers, swarms, and other Docker resources, run the following command:

```yml
docker info
```

To view the list of nodes in your Docker swarm, use the following command:

```yml
docker node ls
```

The command below is used to create a Docker service with specific configurations:

```yml
docker service create --replicas 1 --name node-server node ping docker.com
```

# Breakdown of the Command

- **`docker service create`**: Creates a new service in Docker Swarm mode.
- **`--replicas 1`**: Specifies that only one replica (or instance) of the service should run. You can increase this number to run multiple instances for load balancing and redundancy.
- **`--name node-server`**: Assigns the name `node-server` to the service, making it easier to manage.
- **`node`**: Specifies the base image to use, in this case, the official Node.js image from Docker Hub.
- **`ping docker.com`**: Specifies the command to run within the container. Here, it’s running `ping docker.com`, which is a continuous ping command to test network connectivity to `docker.com`.

To view the created service, run the following command:

```yml
docker service ls
```
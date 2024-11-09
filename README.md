> Commands 👇

### 1. Build a Docker Image

To create a Docker image for this application:

```bash
docker build -t dockify/front-end .
```


- `docker build`: This command builds an image from a Dockerfile.
- `-t dockify/front-end`: The `-t` flag tags the image with a name (`dockify/front-end`) for easy reference.
- `.`: This specifies the current directory, where Docker will look for the Dockerfile.

### 2. List Docker Images

To see all images currently available on your system:

```bash
docker images
```

- This command displays a list of all Docker images along with details like Image ID, size, and creation date.

### 3. Run the Docker Image

To start a container from the image you built:

```bash
docker run dockify/front-end
```

- `docker run`: This command creates and starts a container from a specified image.
- `dockify/front-end`: Refers to the image name we created earlier.

> **Tip**: To pass environment variables from a `.env` file when running the container, use:

```bash
docker run --env-file .env dockify/front-end
```

This loads environment variables defined in `.env` into the container.

### 4. List Running Containers

To see all containers that are currently running:

```bash
docker ps
```

- This command shows running containers along with details like Container ID, image, and status.

### 5. Stop a Running Container

To stop a container, you can use either the container name or its ID:

```bash
docker stop <container_name_or_id>
```

- Replace `<container_name_or_id>` with the actual name or ID of the container from `docker ps`.

### 6. Remove a Docker Container

After stopping a container, you can remove it with:

```bash
docker rm <container_id>
```

- Replace `<container_id>` with the ID of the container you want to remove.

### 7. Remove a Docker Image

To delete an image from your system:

```bash
docker rmi <image_id>
```

- Replace `<image_id>` with the ID of the image you want to delete. You can get this ID from `docker images`.

---

## Summary of Commands

| Command                                       | Description                                               |
| --------------------------------------------- | --------------------------------------------------------- |
| `docker build -t dockify/front-end .`         | Build an image from the Dockerfile                        |
| `docker images`                               | List all Docker images                                    |
| `docker run dockify/front-end`                | Run a container from the image                            |
| `docker ps`                                   | List all running containers                               |
| `docker stop <container_name_or_id>`          | Stop a running container                                  |
| `docker rm <container_id>`                    | Remove a stopped container                                |
| `docker rmi <image_id>`                       | Remove a Docker image                                     |
| `docker run --env-file .env dockify/front-end`| Run container with environment variables from `.env` file |

This README should help you get started with Docker commands for this project!

# Instructions

## Create image
Assign a name and version to build the image
```sh
docker build -t <image_name>:<image_version> .
```
## Create container
```sh
docker run --name <container_name> -p 3000:3000 -d <image_name>:<image_version>
```
Creating a container that will remove itself after being stopped
```sh
docker run --rm --name <container_name> -p 3000:3000 -d <image_name>:<image_version>
```

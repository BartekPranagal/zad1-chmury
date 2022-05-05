

```
docker build -t pranus/zadanie1:v1 .
```

```
docker run -d -p 8080:8080 --name nodeserver pranus/zadanie1:v1
```

```
sudo apt-get install -y qemu-user-static 
docker buildx create --name builder 
docker buildx use builder 
docker buildx inspect --bootstrap 
docker buildx build -t pranus/zadanie1:bx --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .
```
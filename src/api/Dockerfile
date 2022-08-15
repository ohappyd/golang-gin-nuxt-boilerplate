# Get Go image from DockerHub.
FROM golang:1.18.4-bullseye AS api

# Set working directory.
WORKDIR /usr/src/api

# Copy dependency locks so we can cache.
COPY . .

# Get all of our dependencies.
RUN go mod download

# Copy all of our remaining application.
COPY . .

# Build our application.
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .



RUN go build -o index .

CMD ["./index"]
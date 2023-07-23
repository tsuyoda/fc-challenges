FROM golang:alpine3.18 as builder

WORKDIR /app

COPY ./main.go main.go

RUN go build -o bin/fullcycle main.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/bin/fullcycle fullcycle

ENTRYPOINT [ "/app/fullcycle" ]
```
docker build -t nodejs .
```

```
docker run -it -p 80:8080 nodejs
```

```
heroku login
heroku container:login
heroku container:push web --app nodejsprimes
heroku container:release web --app nodejsprimes
```

```
heroku logs --app nodejsprimes --tail
```

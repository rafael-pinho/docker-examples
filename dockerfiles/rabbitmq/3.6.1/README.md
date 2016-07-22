## Notes

Use port 5672 to connect and port 15672 to access management api using http.
Default userName:password = guest:guest
 
 ```
docker run -d -e -p 5672:5672 -p 15672:15672 rafaelpinho/alpine:rabbitmq-3.6.1
```

## Notes

Contains two files: 
"min-build", a minimal build with nodejs, npm and nothing more; 
"full-build", a full build with nodejs, npm and other packages like gcc, python and make 
to be possible install some npm packages
 
```
docker run -d -p 10000:10000 rafaelpinho/node:6.2.2-min
docker run -d -p 10000:10000 rafaelpinho/node:6.2.2-full
```

If you want a nodejs image to run with oracledb package see [this](./oracledb).

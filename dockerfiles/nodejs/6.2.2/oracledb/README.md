## Notes

Build a node image able to use npm oracledb package
 
```
docker run -d -e -p 10000:10000 rafaelpinho/node:ora-6.2.2
```

## Instructions

Before build image you need to download 'instantclient-basic-linux.x64-12.1.0.2.0.zip' 
and 'instantclient-sdk-linux.x64-12.1.0.2.0.zip' from oracle website. Download and put the archives inside this folder.
After do this build your image.

```
docker build -f dockerfile -t yourtag ./
```
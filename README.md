# node-ts-class (Blog)
install node modules
```
 STEP 1: yarn OR npm install
```
compiles typescript
```
 STEP 2: yarn watch OR npm run watch
```
run the server
```
 STEP 3: yarn dev OR npm run dev
```

# Queries
1. Register/Login User
```
localhost:5000/auth/register
localhost:5000/auth/login
```
2. Create Blog (Must be Logged in)
```
localhost:5000/blog/create
```
3. Put Comment (Must be Logged in)
```
localhost:5000/blog/comment/:blogId
```
4.Update/Delete Post (By Orginal Creator Only)
```
localhost:5000/blog/update/:blogId
localhost:5000/blog/delete/:blogId
```
5.Show All User 
```
localhost:5000/user
```
5. Show All Blogs
```
localhost:5000/blog/read
```
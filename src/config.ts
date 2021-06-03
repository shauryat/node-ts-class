export default {
    port: process.env.PORT ?? '5000',
    uri: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/msit',
    secret: process.env.JWT_SECRET ?? 'my_secret',
}
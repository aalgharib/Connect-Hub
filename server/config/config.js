const config = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "Connect-Hub",
  mongoURI:
    process.env.MONGODB_URI ||
    "mongodb+srv://Mbarhou:ConnectHub321@connecthub.xoa3wfo.mongodb.net/Users?retryWrites=true&w=majority",
};

export default config;

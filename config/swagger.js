import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth API",
      version: "1.0.0",
      description: "Authentication API documentation",
    },
    servers: [
      {
        url: "http://localhost:4000/",
      },
    ],
  },
  apis: ["./routes/*.js", "./docs/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;

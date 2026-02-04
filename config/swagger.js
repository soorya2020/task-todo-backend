import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo & Auth API",
      version: "1.0.0",
      description:
        "Full API documentation for Authentication and Todo Collections",
    },
    servers: [
      {
        url: "https://api.gittogether.co.in", 
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    // Optional: Apply security globally to all routes
    // security: [{ bearerAuth: [] }],
  },
  // Ensure these paths point to where your @swagger comments are located
  apis: ["./routes/*.js", "./docs/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;

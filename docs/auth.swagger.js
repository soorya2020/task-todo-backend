/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication routes
 */

/**
 * @swagger
 * /api/auth/sign-up:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *               name:
 *                 type: string
 *                 example: Jhon Doe
 *     responses:
 *       201:
 *         description: User registered successfully
 */

/**
 * @swagger
 * /api/auth/sign-in:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123 
 *     responses:
 *       200:
 *         description: Login successful
 */

/**
 * @swagger
 * /api/auth/sign-out:
 *   post:
 *     summary: Logout user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logout successful
 */

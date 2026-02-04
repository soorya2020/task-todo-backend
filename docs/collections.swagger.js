/**
 * @swagger
 * /api/todos/collections:
 *   get:
 *     summary: Get all collections of logged-in user
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Collections fetched successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/todos/collections:
 *   post:
 *     summary: Create a new collection
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Work Todos
 *               todos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     task:
 *                       type: string
 *                       example: Finish Swagger docs
 *                     completed:
 *                       type: boolean
 *                       example: false
 *     responses:
 *       201:
 *         description: Collection created
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/todos/collections/{id}:
 *   put:
 *     summary: Update todos in a collection
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Collection ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [todos]
 *             properties:
 *               todos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     task:
 *                       type: string
 *                     completed:
 *                       type: boolean
 *     responses:
 *       200:
 *         description: Collection updated
 *       404:
 *         description: Collection not found
 *       401:
 *         description: Unauthorized
 */

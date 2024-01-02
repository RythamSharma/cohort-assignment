const z= require('zod');
const todoSchema = z.object({
    title: z.string(),
    description: z.string().optional()
});

const updatetodo= z.object({
    id: z.string()
})

module.exports={
    todoSchema,
    updatetodo
}
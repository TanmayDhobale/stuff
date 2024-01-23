const zod =  require("zod");
const createtodo = zod.object({
title:zod.string(),
decreption:zod.string(),
})

const updatetodo = zod.object({
id:zod.string(),
})

module.exports={ createtodo, updatetodo}
import { PrismaClient } from "../generated/prisma/index.js";


const prisma = new PrismaClient()

async function main(){
    const deleteUser = await prisma.user.delete({
        where:{
            id:"ae369d0b-59fb-4f85-bf92-a202503a8629"
        }
    })
    console.log("delete sucessfully : ",deleteUser)
}
main()
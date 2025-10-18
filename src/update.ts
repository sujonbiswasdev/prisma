import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()

async function main() {
    const updateUser =await prisma.user.update({
        where:{
            id:"079bad9f-cc68-4aaa-9bee-53030db3edfa"
        },
        data:{
            name:"sujon biswas he is a student",
            email:"sujonbiswas123654487@gmail.com"
        }
    });

    console.log("update user data" , updateUser)
    
}
main()
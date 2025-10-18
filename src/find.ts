import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()
async function main() {
    // const findMovies = await prisma.movie.findMany()
    // console.log(findMovies)

    // const findUnic = await prisma.user.findUnique({
    //     where:{
    //         id:"f4e72c29-b83d-4feb-be8e-9d9a8ea74ce9"
    //     },
    //     include:{
    //         watchList:true
    //     }
    // })
    // console.log(findUnic)

    // const findFirst = await prisma.user.findFirst({
    //     where:{
    //         password:"1478"
    //     }
    // })
    // console.log(findFirst)

    // find error 
      const findError = await prisma.user.findUniqueOrThrow({
        where:{
            email:"madob96@gmail.com"
        },
        include:{
            watchList:true
        }
    })
    console.log(findError)




    
}
main()
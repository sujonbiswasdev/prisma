import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()

async function main() {
    // const result = await prisma.user.count()
    // console.log(result)

    // const result = await prisma.review.groupBy({
    //     by:["movieId"],
    //     _count:{id:true}
    // })
    // console.log(result)
    // const result = await prisma.review.groupBy({
    //     by:["movieId"],
    //     _min:{id:true}
    //      _sum:{id:true}
    // })
    // console.log(result)

    const result = await prisma.review.groupBy({
        by:["movieId"],
        // _avh:{id:true},
        // having:{
        //     id:{
        //         gt:4,
        //     }
        // }

        
    })
    console.log(result)
}
main()
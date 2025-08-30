//@ts-nocheck
import ProductForm from "@/Components/Addtranscation";
import prismaclient from "@/services/prisma";


export default async function addtranscation({ params }) {

    const id = params.id;
    const stockdetail = await prismaclient.stock.findUnique({
        where: {
            id: id
        }
    });
    return (
        <div>
            <ProductForm stock={stockdetail} />
        </div>

    )
} 
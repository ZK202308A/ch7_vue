import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getProduct} from "../api/productApi.jsx";

export const useProductView = () => {

    const route = useRoute()

    const pno = route.params.pno

    const product = ref({
        pno:0,
        pname:'',
        price:0,
        content:'',
        writer:'',
        imageList:[]
    })

    onMounted(() => {

        console.log(`Product View Component Mounted ${pno}`)

        getProduct(pno).then(data => {
            console.log(data)
            product.value = data
        })
    })

    const router = useRouter()

    const handleClickList = () => {
        console.log("handleClickList")
        router.push({path: "/product/list", query: route.query})
    }

    const handleClickModify = () => {
        console.log("handleClickModify")
        router.push({path: `/product/modify/${pno}`, query: route.query})
    }

    return {
        product,
        handleClickList,
        handleClickModify
    }
}

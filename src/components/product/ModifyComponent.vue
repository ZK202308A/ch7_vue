<script setup>

import {useProductView} from "../../hooks/useGetProduct.jsx";
import UploadComponent from "./UploadComponent.vue";
import {deleteServerFile} from "../../api/uploadApi.jsx";
import {putProduct} from "../../api/productApi.jsx";

const {product, handleClickList} = useProductView()

const handleClickPut = () => {
	console.log("handleClickPut")

	putProduct(product.value).then(data => {
		console.log(data)
	})

}

const handleClickDelete = () => {
	console.log("handleClickDelete")
}

const setUploadResult = (uploadedFileNames) => {
	console.log("uploadedFileNames", uploadedFileNames);
	product.value.imageList.push(...uploadedFileNames)
}

const handleClickDeleteImage = (fileName) => {

	deleteServerFile(fileName).then(() => {

		product.value.imageList = product.value.imageList.filter(imgName => imgName !== fileName)

	})
}




</script>

<template>

	<div>Product View Component</div>

	<div>
		<label>Pno</label>
		<input type="text" name="pno" :value="product.pno" readonly>
	</div>

	<div>
		<label>Name</label>
		<input type="text" name="pname" :value="product.pname" readonly>
	</div>
	<div>
		<label>Price</label>
		<input type="number" name="price"  :value="product.price" readonly>
	</div>

	<div>
		<label>Content</label>
		<input type="text" name="content" :value="product.content" readonly>
	</div>

	<div>
		<label>Writer</label>
		<input type="text" name="writer" :value="product.writer" readonly >
	</div>

	<div>
		<UploadComponent @setUploadResult="setUploadResult" />
	</div>

	<div>

		<ul v-if="product.imageList.length > 0" >

			<li v-for="(image,idx) in product.imageList" :key="idx">
				<div >
					<img :src="`http://localhost:8080/s_${image}`">
					<button @click="() => handleClickDeleteImage(image)">x</button>
				</div>
			</li>

		</ul>
	</div>

	<div>
		<div class="flex m-2 p-2 justify-end">
			<button type="button" class="listBtn" @click="handleClickList">List</button>
			<button type="button" class="modifyBtn" @click="handleClickPut">Modify</button>
			<button type="button" class="delBtn" @click="handleClickDelete">Delete</button>
		</div>
	</div>

</template>

<style scoped>
.listBtn {
	background-color: #4CAF50; /* Green */
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}
.modifyBtn {
	background-color: #008CBA; /* Blue */
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

.delBtn {
	background-color: #f44336; /* Red */
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

</style>


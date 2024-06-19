<script setup>

import { ref, onMounted } from 'vue';
import {uploadServer} from "../../api/uploadApi.jsx";

const upload = ref(null);

const emits = defineEmits(["setUploadResult"])


const handleClickUpload = (e) => {

  console.log(upload.value.files)

  if (upload.value.files) {

    const formData = new FormData();

    for (const fileData of upload.value.files) {

      formData.append("files", fileData);

    }//end for

    uploadServer(formData).then(result => {
      console.log(result)

      emits('setUploadResult', result);

      const inputTag = upload.value

      inputTag.value = ''

    })
  }

}


</script>

<template>
  <div>
    <label>Image</label>
    <input type="file" name="image" ref="upload" multiple>
    <button @click="handleClickUpload">upload</button>
  </div>
</template>

<style scoped>

</style>
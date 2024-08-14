<template>
  <div class="photo-container">
    <img :src="imageSrc" alt="Photo" />
  </div>
</template>

<script>
import MyImage from '@/assets/drevo1.png';

export default {
  data() {
    return {
      imageSrc: MyImage
    };
  }
};
</script>

<style scoped>
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: -12px;
}

img {
  max-width: 80.3%;
  height: auto;
}
</style>
<template>
  <div class="outer-container">
    <div class="image-container" :style="{ backgroundImage: `url(${images[currentImage]})` }">
      <div class="overlay">
        <h1>Миссия сервиса Famiry</h1>
        <p>Побудить людей изучать семейную историю и укреплять <br> семейные связи! Сделать генеалогию доступной! <br>
          Чтобы каждый Иван знал своего прапрапрадеда</p>
        <button @click="handleClick">Телеграм-канал</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import drevo1 from '@/assets/Photo1.png';
import drevo2 from '@/assets/Photo2.png';
import drevo3 from '@/assets/Photo3.png';
import drevo4 from '@/assets/Photo4.png';
import drevo5 from '@/assets/Photo5.png';

export default {
  setup() {
    const images = [drevo1, drevo2, drevo3, drevo4, drevo5];
    const currentImage = ref(0);

    onMounted(() => {
      setInterval(() => {
        currentImage.value = (currentImage.value + 1) % images.length;
      }, 3000);
    });

    const handleClick = () => {
      alert('Ссылка Тг');
    };

    return {
      images,
      currentImage,
      handleClick,
    };
  },
};
</script>

<style scoped>
.outer-container {
  margin-left: 180px;
  margin-top: 70px;
  margin-bottom: -25px;
  width: 1270px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
}

.image-container {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  width: 50%;
  background-color: rgba(35, 44, 169, 0.7);
  text-align: center;
  border-radius: 25px;
}

h1 {
  margin: 15px;
  font-size: 45px;
  color: #fff;
}

p {
  margin: 1em 0;
  font-size: 20px;
  color: #fff;
}

button {
  margin-top: 10px;
  font-size: 19px;
  padding: 15px 50px;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  color: rgb(67, 95, 255);
  ;
  cursor: pointer;
}
</style>
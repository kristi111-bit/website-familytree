<template>
  <div class="work-container">
    <div class="work-left">
      <h1 class="main-text2">
        Посмотрите, <br> как<span class="purple"> это работает</span>
      </h1>
      <div class="block-title">
        <h3> <span class="grey"> В коротком видеоролике вы узнаете <br> про основной функционал сервиса Famiry.<br>
            Приятного просмотра!</span></h3>
      </div>
      <div class="work-block">
        <button class="button1" @click="saveHistory">Еще больше видео вас ждет <br>на нашем YouTube-канале</button>
      </div>
      <img src="@/assets/Youtube.png" alt="" class="Youtube" />
    </div>
    <div class="work-right">
      <img :src="imageSrc" alt="Древо" />
    </div>
  </div>
</template>

<script>
import imageSrc from '@/assets/drevoN.png';

export default {
  name: 'Work',
  data() {
    return {
      imageSrc,
    };
  },
  methods: {
    saveHistory() {
      alert('Переход на канал...');
    },
  },
};
</script>

<style scoped>
.work-container {
  display: flex;
  margin-left: 195px;
  margin-top: 120px;
}

.work-left {
  flex: 1;
  padding: 20px;
  position: relative;
}

.purple {
  color: rgb(97, 119, 237);
  font-size: 50px;
}

.main-text2 {
  font-size: 50px;
  color: rgb(47, 47, 47);
  margin: -36px;
}

.block-title {
  font-size: 30px;
  margin-top: 55px;
  margin-left: -38px;
}

.grey {
  font-size: 20px;
  color: rgb(101, 101, 101);
}

.button1 {
  background-color: #f2f3f8;
  color: rgb(101, 101, 101);
  border: 2px solid transparent;
  padding: 45px 78px;
  padding-top: 31px;
  padding-bottom: 65px;
  border-radius: 15px;
  font-size: 18px;
  margin-top: 25px;
  margin-left: -40px;
  cursor: pointer;
  transition: border 0.1s;
}

.button1:hover {
  border: 2px solid rgb(81, 105, 240);
}

.Youtube {
  margin-left: 80px;
  max-width: 20%;
  margin-bottom: 31px;
}

.work-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 121.5%;
  height: auto;
  margin-left: -517px;
  margin-top: -50px;
}
</style>
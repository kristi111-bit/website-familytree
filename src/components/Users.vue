<template>
  <div class="user-container">
    <div class="user-left">
      <h1 class="main-text2">
        С нами уже <br> <span class="purple"> тысячи семей</span>
      </h1>
      <div>
        <img src="@/assets/drevo6.png" alt="" class="peorle" />
      </div>
      <div>
        <button class="button1" @click="saveHistory">Начать строить дерево</button>
      </div>
    </div>
    <div class="user-right">
      <img :src="imageSrc" alt="Древо" />
    </div>
  </div>
</template>

<script>
import imageSrc from '@/assets/drevo5.png';

export default {
  name: 'Users',
  data() {
    return {
      imageSrc,
    };
  },
  methods: {
    saveHistory() {
      alert('Древо...');
    },
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  margin-left: 190px;
  margin-top: 120px;
}

.user-left {
  flex: 1;
  padding: 20px;
  position: relative;
}

.purple {
  color: rgb(97, 119, 237);
  font-size: 55px;
}

.main-text2 {
  font-size: 55px;
  margin: -31px;
  color: rgb(47, 47, 47);
}

.peorle {
  width: 250px;
  height: auto;
  margin-left: -50px;
  margin-top: 40px;
}

.button1 {
  background-color: rgb(97, 119, 237);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 15px;
  font-size: 18px;
  margin-top: 70px;
  margin-left: -30px;
  cursor: pointer;
}

.button1:hover {
  background-color: rgb(81, 105, 240);
}

.user-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 120%;
  height: auto;
  margin-left: -410px;
  margin-top: -40px;
}
</style>
<template>
  <div class="Tolstoy-container">
    <div class="Tolstoy-left">
      <h1 class="main-text1">
        Вдохновитесь древом <span class="purple"><br>Льва Толстого</span>
      </h1>
      <div class="block-title">
        <h3> <span class="grey"> Может повезет, и у вас есть общие предки <br> с великим писателем?</span></h3>
      </div>
      <div>
        <button class="button1" @click="saveHistory">Посмотреть древо Толстого</button>
      </div>
    </div>
    <div class="Tolstoy-right">
      <img :src="imageSrc" alt="Древо" />
    </div>
  </div>
</template>

<script>
import imageSrc from '@/assets/drevo7.png';

export default {
  name: 'Tolstoy',
  data() {
    return {
      imageSrc,
    };
  },
  methods: {
    saveHistory() {
      alert('Древо Толстого!');
    },
  },
};
</script>

<style scoped>
.Tolstoy-container {
  display: flex;
  margin-left: 200px;
  margin-top: 110px;
}

.Tolstoy-left {
  flex: 1;
  padding: 20px;
  position: relative;
}

.purple {
  color: rgb(97, 119, 237);
  font-size: 55px;
}

.main-text1 {
  font-size: 60px;
  margin: -40px;
  color: rgb(47, 47, 47);
}

.block-title {
  font-size: 30px;
  margin-top: 55px;
  margin-left: -39px;
}

.grey {
  font-size: 20px;
  color: rgb(101, 101, 101);
}

.button1 {
  background-color: rgb(97, 119, 237);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 15px;
  font-size: 18px;
  margin-top: 10px;
  margin-left: -40px;
  cursor: pointer;
}

.button1:hover {
  background-color: rgb(81, 105, 240);
}

.Tolstoy-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  height: auto;
  margin-left: -370px;
  margin-top: -40px;
}
</style>
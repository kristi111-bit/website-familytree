<template>
  <div class="history-container">
    <div class="history-left">
      <h1 class="main-text1">
        Сохраните историю <span class="purple"><br>каждого предка</span>
      </h1>
      <ul>
        <li>
          <span class="bold-text">1922 год</span> <br>
          <span class="normal-text">Пошел в школу №15 г. Пензы</span>
        </li>
        <li>
          <span class="bold-text">1941 год</span> <br>
          <span class="normal-text">Был призван в ряды Красной армии</span>
        </li>
        <li>
          <span class="bold-text">1948 год</span> <br>
          <span class="normal-text">Женился на Марии Муравьевой</span>
        </li>
        <li>
          <span class="bold-text">1950 год</span> <br>
          <span class="normal-text">Родился сын Сергей</span>
        </li>
      </ul>
      <button class="button1" @click="saveHistory">Сохранить историю предков</button> 
    </div>
    <div class="history-right">
      <img :src="imageSrc" alt="Древо" />
    </div>
  </div>
</template>

<script>
import imageSrc from '@/assets/drevo2.png';

export default {
  name: 'History',
  data() {
    return {
      imageSrc, 
    };
  },
  methods: {
    saveHistory() {
      alert('История предков сохранена!');
    },
  },
};
</script>

<style scoped>
.history-container {
  display: flex;
  margin-left: 190px;
  margin-top: 100px;
}

.history-left {
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

ul {
  margin-top: 70px;
  margin-left: -45px;
  position: relative;
}

li {
  padding: 10px;
  position: relative;
}

.bold-text {
  font-weight: bold;
  font-size: 40px;
  color: rgb(47, 47, 47);;
}

.normal-text {
  font-weight: normal;
  font-size: 30px;
  color: rgb(101, 101, 101);
}

li::before {
  content: '';
  position: absolute;
  left: -30px;
  top: 21px;
  width: 12px;
  height: 12px;
  background-color: white;
  border: 7px solid rgb(97, 119, 237);
  border-radius: 50%;
}

li:not(:last-child)::after {
  content: '';
  position: absolute;
  left: -18.7px;
  top: 40px; 
  width: 2px;
  height: 80px; 
  background: transparent;
  border-left: 3px dotted rgb(97, 119, 237);
}

.button1 {
  background-color: rgb(97, 119, 237);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 15px;
  font-size: 18px;
  margin-top: 25px;
  margin-left: -35px;
  cursor: pointer;
}

.button1:hover {
  background-color: rgb(81, 105, 240);
}

.history-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 110%;
  height: auto;
  margin-left: -300px;
  margin-top: -30px;
}
</style>
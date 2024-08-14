<template>
  <div class="container">
    <div class="header">Почему люди строят <br>генеалогическое древо</div>
    <div class="marquee-container">
      <div class="marquee">
        <div class="marquee-item">Чтобы сохранить историю своей семьи и помнить о предках </div>
        <div class="marquee-item">Каждое дерево – это уникальная история </div>
        <div class="marquee-item">Интересно построить древо на 7 поколение </div>
        <div class="marquee-item">Пытаюсь восстановить связь с Родиной </div>
        <div class="marquee-item">Для сохранения семейной истории и традиций </div>
      </div>
      <div class="marquee marquee-right">
        <div class="marquee-item">История в каждом поколении </div>
        <div class="marquee-item">Наша память – это наше наследие </div>
        <div class="marquee-item">Важно передать детям наследие рода </div>
        <div class="marquee-item">Хочу обрести хобби для души </div>
        <div class="marquee-item">Нужно восстановить корни для получения гражданства </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenealogyBlock'
}
</script>

<style scoped>
.container {
  background-color: #f0f0f0;
  padding: 80px;
  border-radius: 30px;
  width: 67.35%;
  margin-top: 50px;
  margin-left: 180px;
}

.header {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
  color: rgb(47, 47, 47);
}

.marquee-container {
  overflow: hidden;
  position: relative;
  height: 150px;
}

.marquee {
  position: absolute;
  display: flex;
  white-space: nowrap;
  animation: marquee 95s linear infinite;
}

.marquee-right {
  top: 85px;
  animation: marquee-right 95s linear infinite;
}

.marquee-item {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px;
  font-size: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
<template>
    <div class="app" @mouseover="resetClickTimer">
      <div class="header">
        Вся история вашей семьи 
        <br />
        <div class="sub-header">в едином пространстве</div>
      </div>
      <div class="carousel">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${(currentIndex * 100) / blocks.length}%)` }"
        >
          <div
            v-for="(block, index) in blocks"
            :key="index"
            class="block"
          >
            <h2 v-html="formatTitle(block.title)" class="block-title"></h2>
            <p v-html="block.text" class="block-text"></p>
            <div class="block-footer">
              <button @click="navigateToPage" class="navigate-button">→</button>
              <img :src="block.image" alt="Block Image" class="block-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button @click="prev" class="arrow-button">&lt; </button>
        <button @click="next" class="arrow-button"> &gt;</button>
      </div>
    </div>
  </template>
  
  <script>
import image1 from '@/assets/img1.png';
import image2 from '@/assets/img2.png'; 

export default {
  data() {
    return {
      currentIndex: 0,
      clickTimer: null,
      blocks: [
        {
          title: 'Стройте древо семьи <br /> в режиме онлайн',
          text: 'Удобный интуитивный интерфейс<br />для быстрого добавления родственников',
          image: image1,
        },
        {
          title: 'Создавайте интерактивные <br />  биографии родственников',
          text: 'Добавляйте детали биографии, фото,<br /> аудио, видео',
          image: image2,
        },
        {
          title: 'Получайте советы <br /> по расширению древа',
          text: 'Рекомендации от экспертов по поиску<br />родственников и документов прямо в древе',
          image: image1,
        },
        {
          title: 'Находите родственников <br /> по совпадениям',
          text: 'Автоматический поиск родственников по всем<br />древам, созданным в сервисе',
          image: image2,
        },
        {
          title: 'Делитесь историей семьи <br /> с близкими',
          text: 'Предоставляйте доступ к отдельным карточкам<br />персон или ко всему древу полностью',
          image: image1,
        },
        {
          title: 'Ищите документы в архивах <br /> по всему миру',
          text: 'Доступ к архивам прямо <br /> из сервиса',
          image: image2,
        },
      ],
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.blocks.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.blocks.length) % this.blocks.length;
    },
    navigateToPage() {
      alert('Переход на другую страницу');
    },
    resetClickTimer() {
      clearTimeout(this.clickTimer);
      this.clickTimer = setTimeout(() => {
      }, 300); 
    },
    formatTitle(title) {
      return title
        .replace(/Стройте/g, '<span class="purple">Стройте</span>')
        .replace(/Создавайте/g, '<span class="purple">Создавайте</span>')
        .replace(/Получайте/g, '<span class="purple">Получайте</span>')
        .replace(/Находите/g, '<span class="purple">Находите</span>')
        .replace(/Делитесь/g, '<span class="purple">Делитесь</span>')
        .replace(/Ищите/g, '<span class="purple">Ищите</span>');
    },
  },
};
</script>
  
<style>
.app {
  background-color: rgb(97, 119, 237);
  margin-top: 100px;
  padding: 65px;
  text-align: center;
  color: white;
}

.header {
  font-size: 55px;
  margin-top: -35px;
  margin-bottom: 60px;
}

.sub-header {
  background-color: rgb(47, 47, 47);
  color: rgb(255, 255, 255); 
  margin-top: 15px;
  padding-top: -20px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  display: inline-block;
}

.carousel {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease;
}

.block {
  background-color: #f2f3f8;
  color: rgb(94, 94, 94);
  margin: 0 10px;
  padding: 40px;
  border-radius: 35px;
  text-align: left;
  font-size: 25px;
  min-width: 500px;
  min-height: 300px;
  position: relative;
}

.block-title {
  margin-top: -10px;
  text-align: left;
  color: rgb(47, 47, 47);
}

.block-text {
  margin-top: -15px;
  text-align: left;
  font-size: 20px;
}

.block-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 70px;
  margin-bottom: -25px;
}

.block-image {
  width: 300px;
  height: auto;
  margin-left: 200px;
  margin-top: -85px;
  margin-bottom: -40px;
}

.navigate-button {
  background-color: white;
  color: rgb(97, 119, 237);
  font-size: 35px;
  border: 1px;
  border-radius: 50%;
  cursor: pointer;
  padding: 25px;
}

.navigate-button:hover {
  box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.3);
}

.buttons {
  margin-top: 55px; 
  margin-bottom: -15px;
}

.arrow-button {
  padding: 10px 20px;
  background-color: white;
  border: 1px;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 16px;
}

.arrow-button:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}

.purple {
  color: rgb(97, 119, 237);
}
</style>
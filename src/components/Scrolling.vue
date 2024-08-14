<template>
  <div class="container">
    <div class="scroll-container" ref="scrollContainer">
      <div class="block" v-for="(item, index) in items" :key="index">
        <img :src="item.image" alt="Photo" class="photo" />
        <div class="text-content">
          <h2 v-html="item.title" class="title"></h2>
          <div v-for="(subtitle, subIndex) in item.subtitles" :key="subIndex">
            <h3 class="subtitle">
              <i class="fas fa-check icon"></i>
              <span v-html="subtitle"></span>
            </h3>
          </div>
          <button class="purple-button">Попробовать бесплатно</button>
        </div>
      </div>
      <div class="block" v-for="(item, index) in items" :key="'duplicate-' + index">
        <img :src="item.image" alt="Photo" class="photo" />
        <div class="text-content">
          <h2 v-html="item.title" class="title"></h2>
          <div v-for="(subtitle, subIndex) in item.subtitles" :key="subIndex">
            <h3 class="subtitle">
              <i class="fas fa-check icon"></i>
              <span v-html="subtitle"></span>
            </h3>
          </div>
          <button class="purple-button">Попробовать бесплатно</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drevo1 from '@/assets/PhotoN.png';

export default {
  data() {
    return {
      items: [
        {
          image: drevo1,
          title: 'Простота использования <br> и совместная работа',
          subtitles: [
            'Хранение в карточках персон семейных <br>документов, фотографий, воспоминаний',
            'Онлайн-редактирование древа <br> вместе с близкими из разных <br> городов и стран',
            'Поиск общих родственников в десятках <br>тысяч древ',
          ],
        },
        {
          image: drevo1,
          title: 'Наглядное отображение <br> информации',
          subtitles: [
            'Быстрый поиск персон в древе',
            'Удобные карточки персон и режимы <br> отображения древа',
            'Добавление семейных событий на карту <br> мира онлайн',
          ],
        },
        {
          image: drevo1,
          title: 'Доступ к глубокой экспертизе',
          subtitles: [
            'Премиум-чат с профессиональными <br>генеалогами',
            'Заказ услуг на маркетплейсе <br>фрилансеров прямо из древа',
          ],
        },
        {
          image: drevo1,
          title: 'Безопасность данных',
          subtitles: [
            'Перенос древа из других сервисов <br> и программ в один клик',
            'Мгновенное скачивание файла с древом <br> на компьютер в формате PDF <br> или GEDCOM',
            'Резервное копирование в облачные <br> сервисы',
          ],
        },
      ],
      scrollStep: 1.5,
    };
  },
  mounted() {
    this.startAutoScroll();
  },
  methods: {
    startAutoScroll() {
      const container = this.$refs.scrollContainer;

      const scrollAnimation = () => {
        container.scrollLeft += this.scrollStep;

        if (container.scrollLeft >= container.scrollWidth / 2 - container.clientWidth) {
          container.scrollLeft = 0;
        }

        requestAnimationFrame(scrollAnimation);
      };

      requestAnimationFrame(scrollAnimation);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  width: 100%;
  height: 700px;
  overflow: hidden;
  background: linear-gradient(to right, rgb(47, 47, 47), rgb(97, 119, 237));
}

.scroll-container {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.block {
  display: flex;
  align-items: center;
  min-width: 1000px;
  padding: 100px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  margin-right: -10px;
  border-radius: 0px;
}

.photo {
  width: 500px;
  height: 500px;
  border-radius: 5%;
  margin-right: 10px;
  box-shadow: 7px 7px 19px rgba(141, 157, 248, 0.5);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.photo:hover {
  box-shadow: 7px 17px 30px rgba(115, 132, 227, 0.8);
}

.text-content {
  text-align: left;
  margin-top: -25px;
  margin-left: 30px;
  font-size: 21px;
}

.title {
  font-size: 39px;
}

.subtitle {
  font-size: 23px;
}

.icon {
  color: rgb(188, 251, 184);
  margin-right: 5px;
}

.purple-button {
  margin-top: 20px;
  padding: 15px 20px;
  background-color: rgb(97, 119, 237);
  color: white;
  font-size: 19px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.purple-button:hover {
  background-color: rgb(81, 105, 240);
}
</style>

<style scoped>
.container {
  margin-top: 50px;
  width: 100%;
  height: 700px;
  overflow: hidden;
  background: linear-gradient(to right, rgb(47, 47, 47), rgb(97, 119, 237));
}

.scroll-container {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.block {
  display: flex;
  align-items: center;
  min-width: 1000px;
  padding: 100px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  margin-right: -10px;
  border-radius: 0px;
}

.photo {
  width: 500px;
  height: 500px;
  border-radius: 5%;
  margin-right: 10px;
  box-shadow: 7px 7px 19px rgba(141, 157, 248, 0.5);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.photo:hover {
  box-shadow: 7px 17px 30px rgba(115, 132, 227, 0.8);
}

.text-content {
  text-align: left;
  margin-top: -25px;
  margin-left: 30px;
  font-size: 21px;
}

.title {
  font-size: 39px;
}

.subtitle {
  font-size: 23px;
}

.icon {
  color: rgb(188, 251, 184);
  margin-right: 5px;
}

.purple-button {
  margin-top: 20px;
  padding: 15px 20px;
  background-color: rgb(97, 119, 237);
  color: white;
  font-size: 19px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.purple-button:hover {
  background-color: rgb(81, 105, 240);
}
</style>
<template>
  <div class="outer-container">
    <div class="container">
      <h1 class="main-text">
        Создайте семейное<br>
        <div class="tree-container">
          <img src="../assets/icon1.png" alt="Древо слева" class="icon" />
          <span class="black">древо</span>
          <img src="../assets/icon2.png" alt="Древо справа" class="icon" />
        </div>
        <span class="purple"><br>бесплатно</span>
      </h1>
      <p class="sub-text">
        С легкостью находите родственников, изучайте исторические записи,<br>
        погружайтесь в историю семьи вместе с FamilyTree
      </p>
      <button class="button" @click="openFamilyTree">Создать древо бесплатно</button>
    </div>
  </div>
</template>

<script>
import drevo1 from '@/assets/icon1.png';
import drevo2 from '@/assets/icon2.png';

export default {
  data() {
    return {
      drevo1,
      drevo2,
    };
  },
  methods: {
    openFamilyTree() {
      this.$emit('openFamilyTree');
    },
  },
};
</script>

<style scoped>
.outer-container {
  padding: 0 190px;
  margin-left: -15px;
}

.container {
  background-color: #f2f3f8;
  border-radius: 30px;
  padding: 55px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(97, 119, 237);
  margin-bottom: 65px;
}

.main-text {
  font-size: 85px;
  margin: -5px;
  line-height: 0.9;
  color: rgb(47, 47, 47);
}

.tree-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -95px;
}

.purple {
  color: rgb(97, 119, 237);
  font-size: 85px;
}

.black {
  margin-top: -20px;
  color: rgb(47, 47, 47);
}

.sub-text {
  color: #535353;
  margin: 40px 0 25px; 
  font-size: 25px;
  line-height: 1.5;
}

.button {
  background-color: rgb(97, 119, 237);
  color: white;
  border: none;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 15px 50px;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(81, 105, 240);
}

.icon {
  width: 200px;
  height: auto;
  vertical-align: middle;
  margin: 29px 40px;
}

</style>
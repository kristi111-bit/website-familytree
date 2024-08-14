<template>
  <div class="outer-container">
    <div class="container">
      <h2 class="step-text">
        Три шага к сохранению памяти<span class="purple"> о ваших предках</span>
      </h2>
      <div class="steps">
        <div class="step-block">
          <img src="@/assets/drevo3.png" alt="Step 1" class="step-image" />
          <h3 class="block-title">Создайте свое <br> семейное древо <span class="grey"><br> Заполните в интерактивном
              древе <br> информацию о себе и своих <br> родственниках</span></h3>
        </div>
        <div class="step-block">
          <img src="@/assets/drevo3.png" alt="Step 2" class="step-image" />
          <h3 class="block-title">Поделитесь древом <br> с родными <span class="grey"><br> Порадуйте близких
              результатами <br> и предложите присоединиться <br> к работе над древом</span></h3>
        </div>
        <div class="step-block">
          <img src="@/assets/drevo3.png" alt="Step 3" class="step-image" />
          <h3 class="block-title">Расширяйте ваше <br> древо вместе <span class="grey"><br> Вместе проще и быстрее
              растить <br> семейное древо для передачи <br> будущим поколениям</span></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  padding: 0 191px;
  margin-top: 90px;
}

.container {
  text-align: center;
}

.step-text {
  font-size: 50px;
  color: rgb(47, 47, 47);
}

.steps {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: -16px;
}

.step-block {
  background-color: #f2f3f8;
  border-radius: 15px;
  padding: 30px;
  text-align: left;
  border: 2px solid rgb(97, 119, 237);
  width: 335px;
  height: 310px;
  position: relative;
}

.step-image {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 41%;
  height: 43%;
}

.block-title {
  font-size: 30px;
  margin-top: 155px;
  color: rgb(47, 47, 47);
}

.grey {
  font-size: 20px;
  color: rgb(101, 101, 101);
}

.purple {
  color: rgb(97, 119, 237);
}
</style>
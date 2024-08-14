<template>
  <div id="app">
    <Top v-if="!showFamilyTree" @openFamilyTree="handleOpenFamilyTree" />

    <Body v-if="!showFamilyTree" @openFamilyTree="handleOpenFamilyTree" />
    <Photo1 v-if="!showFamilyTree" />
    <History v-if="!showFamilyTree" />
    <FamilyTreeCarousel v-if="!showFamilyTree" />
    <Steps v-if="!showFamilyTree" />
    <Work v-if="!showFamilyTree" />
    <Scrolling v-if="!showFamilyTree" />
    <Users v-if="!showFamilyTree" />
    <Why v-if="!showFamilyTree" />
    <Tolstoy v-if="!showFamilyTree" />
    <Mission v-if="!showFamilyTree" />
    <Review v-if="!showFamilyTree" />
    <Question v-if="!showFamilyTree" />
    <Footer v-if="!showFamilyTree" />
    <FamilyTree v-if="showFamilyTree" :nodes="initialNodes" />
  </div>
</template>

<script>
import Top from './components/Top.vue';
import Body from './components/Body.vue';
import Photo1 from './components/Photo1.vue';
import History from './components/History.vue';
import FamilyTreeCarousel from './components/FamilyTreeCarousel.vue';
import Steps from './components/Steps.vue';
import Work from './components/Work.vue';
import Scrolling from './components/Scrolling.vue';
import Users from './components/Users.vue';
import Why from './components/Why.vue';
import Tolstoy from './components/Tolstoy.vue';
import Mission from './components/Mission.vue';
import Review from './components/Review.vue';
import Question from './components/Question.vue';
import Footer from './components/Footer.vue';
import FamilyTree from './components/FamilyTree.vue';

export default {
  components: {
    Top,
    Body,
    Photo1,
    History,
    FamilyTreeCarousel,
    Steps,
    Work,
    Scrolling,
    Users,
    Why,
    Tolstoy,
    Mission,
    Review,
    Question,
    Footer,
    FamilyTree,
  },

  data() {
    return {
      showFamilyTree: false,
    };
  },

  methods: {
    handleOpenFamilyTree() {
      this.showFamilyTree = true;
    },
  }
};
</script>
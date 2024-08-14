<template>
    <Family :data="familyData" />
</template>

<script>
import Family from './Family.vue';

export default {
  components: {
    Family,
  },
  data() {
    return {
      familyData: [
        { id: '1', name: 'Я', parent: null },
        { id: '2', name: 'Мать', parent: '1' },
        { id: '3', name: 'Отец', parent: '1' },
      ],
    };
  },
};
</script>
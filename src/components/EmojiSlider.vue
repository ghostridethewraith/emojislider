<template>
  <form id="slider" @submit.prevent>
    <label
        for="range"
        :style="{ color: getHappinessColor }">Happiness: {{ val }}%</label>
    <input v-model.number="val" id="range" type="range" min="0" max="100">
    <div class="slider outer" aria-hidden="true">
      <label for="range"
             :style="{ width: `${val}%`, borderRadius: greaterThanFifty, background: getSliderBackground }"
             class="slider inner"
      ></label>
      <span class="emoji"
            :style="{ transform: `translateX(${getPlacement}) scale(${getEmojiScale})`, fontSize: `${fontSize}` }">
      {{ getHappiness }}
      </span>

    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      val: 0 // начальное значение слайдера
    };
  },
  mounted() {
    this.val = Math.floor(Math.random() * 101);
  },
  computed: {
    getPlacement() {
      return (this.val * 24.5) + '%';
    },
    greaterThanFifty() {
      return this.val > 50 ? 'var(--roundness)' : '0';
    },
    getHappinessColor() {
      return `rgba(255, ${106 + (103 / 100 * this.val)}, ${(Math.floor(this.val * -1 / 7.692) + 13)})`;
    },
    getSliderBackground() {
      return `linear-gradient(to right, var(--orange), ${(this.val * -1) + 125}%, var(--yellow))`;
    },
    getEmojiScale() {
      // Масштаб эмодзи, например от 1 до 2
      return 1 + (this.val / 75); // Эмодзи будет увеличиваться от 1 до 2 в зависимости от значения
    },
    getHappiness() {
      const moods = ["😔", "😟", "😐", "😊", "😁", "🥳", "😍", "🤩", "😎", "🥺"];

      if (this.val === 0) {
        return "😔"; // Смайл для 0
      } else if (this.val === 100) {
        return "🥺"; // Смайл для 100
      } else {
        return moods[Math.floor(this.val / 10)];
      }
    }


  }
};
</script>

<style scoped>
@import '../assets/styles/styles.css';
</style>
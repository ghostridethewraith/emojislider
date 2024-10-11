<template>
  <div id="logo-container">
    <img :src="logo" alt="Logo" />
  </div>
  <form id="slider" @submit.prevent>
    <label
        for="range"
        :style="{ color: getHappinessColor }">Чистота зала: {{ val }}%</label>
    <input v-model.number="val" id="range" type="range" min="0" max="100" @input="logVal">
    <div class="slider outer" aria-hidden="true">
      <label for="range"
             :style="{ width: `${val}%`, borderRadius: greaterThanFifty, background: getSliderBackground }"
             class="slider inner"
      ></label>
      <div class="emoji-container" @click="toggleTopEmoji">
        <span class="emoji top" v-if="showTopEmoji">
          {{ getHappiness }} <!-- Верхний emoji -->
        </span>
        <span class="emoji"
              :style="{ transform: `translateX(${getPlacement}) scale(${getEmojiScale})`}">
          {{ getHappiness }} <!-- Нижний emoji -->
        </span>
      </div>
    </div>
  </form>

  <form id="slider" @submit.prevent>
    <label
        for="range"
        :style="{ color: getHappinessColor1 }">Сервис: {{ val1 }}%</label>
    <input v-model.number="val1" id="range" type="range" min="0" max="100">
    <div class="slider outer" aria-hidden="true">
      <label for="range"
             :style="{ width: `${val1}%`, borderRadius: greaterThanFifty1, background: getSliderBackground1 }"
             class="slider inner"
      ></label>
      <div class="emoji-container" @click="toggleTopEmoji1">
        <span class="emoji top" v-if="showTopEmoji1">
          {{ getHappiness1 }} <!-- Верхний emoji для второго слайдера -->
        </span>
        <span class="emoji"
              :style="{ transform: `translateX(${getPlacement1}) scale(${getEmojiScale1})`}">
          {{ getHappiness1 }} <!-- Нижний emoji для второго слайдера -->
        </span>
      </div>
    </div>
  </form>

  <form id="slider" @submit.prevent>
    <label
        for="range"
        :style="{ color: getHappinessColor2 }">Качество блюд: {{ val2 }}%</label>
    <input v-model.number="val2" id="range" type="range" min="0" max="100">
    <div class="slider outer" aria-hidden="true">
      <label for="range"
             :style="{ width: `${val2}%`, borderRadius: greaterThanFifty2, background: getSliderBackground2 }"
             class="slider inner"
      ></label>
      <div class="emoji-container" @click="toggleTopEmoji2">
        <span class="emoji top" v-if="showTopEmoji2">
          {{ getHappiness2 }} <!-- Верхний emoji для третьего слайдера -->
        </span>
        <span class="emoji"
              :style="{ transform: `translateX(${getPlacement2}) scale(${getEmojiScale2})`}">
          {{ getHappiness2 }} <!-- Нижний emoji для третьего слайдера -->
        </span>
      </div>
    </div>
  </form>

  <textarea id="myTextarea" name="myTextarea" placeholder="Оставьте комментарий..."></textarea>


</template>

<script>
import logo from '@/components/icons/omg-coffee-logo.svg';
export default {
  data() {
    return {
      val: 0,  // начальное значение первого слайдера
      val1: 0, // начальное значение второго слайдера
      val2: 0,  // начальное значение третьего слайдера
      showTopEmoji: false, // Состояние для видимости верхнего emoji первого слайдера
      showTopEmoji1: false, // Состояние для второго слайдера
      showTopEmoji2: false, // Состояние для третьего слайдера
      logo,
    };
  },
  mounted() {
    this.val = Math.floor(Math.random() * 101);
    this.val1 = Math.floor(Math.random() * 101);
    this.val2 = Math.floor(Math.random() * 101); // Случайное значение для val2
  },
  computed: {
    getPlacement() {
      return this.getSliderPlacement(this.val);
    },
    getPlacement1() {
      return this.getSliderPlacement(this.val1);
    },
    getPlacement2() {
      return this.getSliderPlacement(this.val2); // Новое вычисляемое свойство для val2
    },
    greaterThanFifty() {
      return this.isGreaterThanFifty(this.val);
    },
    greaterThanFifty1() {
      return this.isGreaterThanFifty(this.val1);
    },
    greaterThanFifty2() {
      return this.isGreaterThanFifty(this.val2); // Новое вычисляемое свойство для val2
    },
    getHappinessColor() {
      return this.getSliderColor(this.val);
    },
    getHappinessColor1() {
      return this.getSliderColor(this.val1);
    },
    getHappinessColor2() {
      return this.getSliderColor(this.val2); // Новое вычисляемое свойство для val2
    },
    getSliderBackground() {
      return this.getSliderBackgroundStyle(this.val);
    },
    getSliderBackground1() {
      return this.getSliderBackgroundStyle(this.val1);
    },
    getSliderBackground2() {
      return this.getSliderBackgroundStyle(this.val2); // Новое вычисляемое свойство для val2
    },
    getEmojiScale() {
      return this.getEmojiScaling(this.val);
    },
    getEmojiScale1() {
      return this.getEmojiScaling(this.val1);
    },
    getEmojiScale2() {
      return this.getEmojiScaling(this.val2); // Новое вычисляемое свойство для val2
    },
    getHappiness() {
      return this.getMood(this.val);
    },
    getHappiness1() {
      return this.getMood(this.val1);
    },
    getHappiness2() {
      return this.getMood(this.val2); // Новое вычисляемое свойство для val2
    }
  },
methods: {
  logVal() {
    console.log('Текущее значение val:', this.val);
  },
  toggleTopEmoji() {
    this.showTopEmoji = !this.showTopEmoji; // Переключает видимость верхнего emoji первого слайдера
  },
  toggleTopEmoji1() {
    this.showTopEmoji1 = !this.showTopEmoji1; // Переключает видимость верхнего emoji второго слайдера
  },
  toggleTopEmoji2() {
    this.showTopEmoji2 = !this.showTopEmoji2; // Переключает видимость верх
  },
    getSliderPlacement(value) {
      return (value * 24.5) + '%';
    },
    isGreaterThanFifty(value) {
      return value > 50 ? 'var(--roundness)' : '0';
    },
    getSliderColor(value) {
      const gStart = 106; // Начальное значение для зеленого
      const gEnd = 85;    // Конечное значение для зеленого
      const bStart = 13;  // Начальное значение для синего
      const bEnd = 133;   // Конечное значение для синего

      const g = gStart + ((gEnd - gStart) / 100 * value);
      const b = bStart + ((bEnd - bStart) / 100 * value);

      return `rgba(255, ${g}, ${Math.floor(b)})`;
    },
    getSliderBackgroundStyle(value) {
      return `linear-gradient(to right, var(--pink), ${(value * -1) + 125}%, var(--pale-pink))`;
    },
    getEmojiScaling(value) {
      return  1 + (value / 75);
    },
    getMood(value) {
      const moods = ["😔", "😟", "😐", "😊", "😁", "🥳", "😍", "🤩", "😎", "🥺"];

      if (value === 0) {
        return "😔"; // Смайл для 0
      } else if (value === 100) {
        return "🥺"; // Смайл для 100
      } else {
        return moods[Math.floor(value / 10)];
      }
    },
  }
};
</script>

<style scoped>

@import '../assets/styles/styles.css';
</style>


<template>
  <div>
    <button
      ref="dropdownBtn"
      @click="toggle"
    >
      {{ $i18n.locale | formatLocale }}
    </button>
    <div
      v-if="drop"
      ref="dropdownArea"
      class="dropdown-area"
    >
      <ul>
        <li
          v-for="locale in $i18n.availableLocales"
          :key="locale"
          tabindex="0"
          @click="select(locale)"
          @keyup.enter="select(locale)"
        >
          {{ locale | formatLocale }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocaleSwitcher",
  filters: {
    formatLocale: function (locale) {
      switch (locale) {
        case "en":
          return "🇬🇧 English";
        case "ja":
          return "🇯🇵 日本語";
        default:
          return "error: unknown lang";
      }
    },
  },
  data() {
    return {
      drop: false,
    };
  },
  methods: {
    toggle() {
      var _this = this;
      const closeListerner = (e) => {
        if (_this.catchOutsideClick(e, _this.$refs.dropdownBtn))
          window.removeEventListener("click", closeListerner),
            (_this.drop = false);
      };

      window.addEventListener("click", closeListerner);

      this.drop = !this.drop;
    },
    select(locale) {
      this.$i18n.locale = locale;
      this.toggle();
    },
    catchOutsideClick(event, dropdown) {
      // When user clicks menu — do nothing
      if (dropdown == event.target) return false;
      // When user clicks outside of the menu — close the menu
      if (this.drop && dropdown != event.target) return true;
    },
  },
};
</script>
<style scoped>
button {
  background: transparent;
  border: none;
  color: white;
  font-size: 0.875rem;
  padding: calc(0.675rem - 3px) 60px calc(0.675rem - 3px) 12px;
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 8px;
  transition: background 70ms cubic-bezier(0, 0, 0.38, 0.9),
    border-color 120ms cubic-bezier(0, 0, 0.38, 0.9);
}
button:hover,
button:focus {
  border-color: var(--colour-2);
}
button:active {
  background: rgba(255, 255, 255, 0.2);
}
.dropdown-area {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: white;
  border-radius: 0px 0px 8px 8px;
}
.dropdown-area ul {
  margin: 0.4rem 0px;
  padding: 0px;
}
.dropdown-area li {
  list-style: none;
  font-size: 0.875rem;
  padding: calc(0.675rem - 3px) 60px calc(0.675rem - 3px) 12px;
  cursor: pointer;
}
li:before {
    display: none;
}
.dropdown-area li:hover, .dropdown-area li:focus{
    background: rgba(255, 255, 255, 0.3);
}
</style>

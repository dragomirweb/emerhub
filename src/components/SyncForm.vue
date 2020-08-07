<template>
  <div class="flex flex-col items-center mt-8">
    <div class="w-2/3 mb-5">
      <h3 class="text-left">Progress</h3>
      <div
        :class="
          `flex justify-between my-2 ${progress > 0 ? 'visible' : 'invisible'}`
        "
      >
        <span class="text-xs">{{progress}}%</span>
      </div>
      <div
        :style="{ width: `${progress}%` }"
        class="progress h-1 bg-gray-500"
      ></div>
    </div>
    <form
      @change="test"
      class="w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          1. If you had the world’s attention for 30 seconds, what would you
          say?
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="question1"
          v-model="questionaire.question1"
          placeholder="Answer"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          2. If you had to work but didn’t need the money, what would you choose
          to do?
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="question2"
          v-model="questionaire.question2"
          placeholder="Answer"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          3. If you were home on a rainy sunday afternoon, what movie would you
          most want to see on television?
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="question3"
          v-model="questionaire.question3"
          placeholder="Answer"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          4. If you could dis-invent one thing, what would it be?
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="question4"
          v-model="questionaire.question4"
          placeholder="Answer"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          5. What would be the best thing about not having a sense of smell?
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="question5"
          v-model="questionaire.question5"
          placeholder="Answer"
        />
      </div>
      <div class="flex items-center justify-between mt-5">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send answers
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapValues as _mapValues } from 'lodash'

interface Questionaire {
  question1: string | null
  question2: string | null
  question3: string | null
  question4: string | null
  question5: string | null
}

@Component
export default class extends Vue {
  questionaire: Questionaire = {
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  }
  mounted() {
  }

  get progress() {
    let progress = 0
    _mapValues(this.questionaire, (o) => {
      if (o && o.length > 0) progress = progress + 20
    })
    return progress
  }

  test(val: any) {
    console.log(this.progress)
  }
}
</script>

<style lang="scss" scoped>
.progress {
  transition: width 0.7s ease-in;
}
</style>

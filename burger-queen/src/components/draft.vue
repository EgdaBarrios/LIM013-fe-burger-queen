<div class="breakfast" v-if="time >= (12,0)">
  <p>It's time for breakfast!</p>
</div>
<div class="otherMeals" v-else>
  <p>I love hamburgers!</p>
</div>

<div v-if="time > 0">
  It's time for breakfast!
</div>
<div v-else>
  I love hamburgers!
</div>

data: () => ({
  date: new Date().toLocaleDateString('en-GB'),
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
}),

<template>
  <div>
    <img class="runner first" src="../assets/runner.png" alt="runner" />
    <img class="runner second" src="../assets/runner.png" alt="runner" />
    <img class="runner third" src="../assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    // repeat: 2 // lặp lại 2 lần
    // repeat: -1 // lặp lại mãi mãi
    // repeatDelay: 1.2 // xong 1 đợt đợi 1.2s r mới lặp tiếp
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Mặc định timeline sẽ chạy tuần tự, nối tiếp
    tl.to('.first', { x: 700, duration: 2, ease: 'expo.out' });
    // tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, .5); // absolute trễ 0.5 (so với cái đầu)
    // tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, '-=.75'); // relative sớm 0.75 (so với cái default)
    // tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, '-=2'); // relative sớm 2 (so với cái default) => cùng đi như cái 1
    // tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, '<'); // cùng đi như cái trước nó, <.5 trễ hơn trc nó .5s
    tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, '<.5'); // cùng đi như cái trước nó, <.5 trễ hơn trc nó .5s
    tl.to('.third', { x: 700, duration: 2, ease: 'expo.out' }, '<');
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>
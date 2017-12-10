<template>
  <div :style="{ height: height + 'px' }" class="blurUp">
    <img :src="imageSrc" :height="height" :class="{'loading-image': imageLoading}"/>
    <img :src="src" :height="height" @load="imageLoaded" v-show="false"/>
  </div>
</template>

<script>
export default {
  props: ['src', 'smallSrc', 'height'],
  name: 'BlurUpImage',
  data () {
    return {
      imageSrc: '',
      imageLoading: true
    }
  },
  mounted () {
    this.imageSrc = this.smallSrc
  },
  methods: {
    imageLoaded () {
      this.imageLoading = false
      this.imageSrc = this.src
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    border-radius: 5px;
    transition: filter 0.5s ease-in;
    &.loading-image {
      filter: blur(10px);
    }
  }
</style>

<template>
  <div :style="{ height: height + 'px' }" class="Primitive">
    <span v-html="svg"></span>
    <img :src="src" :height="height" @load="imageLoaded" v-show="false"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['src', 'smallSrc', 'height'],
  name: 'PrimitiveImage',
  data () {
    return {
      imageSrc: '',
      imageLoading: true,
      svg: ''
    }
  },
  mounted () {
    // this.imageSrc = this.smallSrc
    axios.get(this.smallSrc).then((res) => {
      console.log(res)
      this.svg = res.data.Primitive.final_svg
    })
  },
  methods: {
    imageLoaded () {
      // this.imageLoading = false
      // this.imageSrc = this.src
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

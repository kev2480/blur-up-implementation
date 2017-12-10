<template>
  <div class="container">
    <BlurUpImage src="http://localhost:3000/panda1.jpg" smallSrc="http://localhost:3000/small/panda1.jpg" :height="600"></BlurUpImage>
  </div>
</template>

<script>
import BlurUpImage from './BlurUpImage'
export default {
  name: 'BlurUp',
  components: {
    BlurUpImage
  }
}
</script>

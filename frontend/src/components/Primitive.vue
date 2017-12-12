<template>
  <div class="container">
    <PrimitiveImage src="http://localhost:3000/panda1.jpg" smallSrc="http://localhost:3000/Primitive/panda1.jpg" :height="600"></PrimitiveImage>
    <br />
    <PrimitiveImage src="http://localhost:3000/panda2.jpg" smallSrc="http://localhost:3000/Primitive/panda2.jpg" :height="600"></PrimitiveImage>
    <br />
    <PrimitiveImage src="http://localhost:3000/panda3.jpg" smallSrc="http://localhost:3000/Primitive/panda3.jpg" :height="600"></PrimitiveImage>
  </div>
</template>

<script>
import PrimitiveImage from './PrimitiveImage'
export default {
  name: 'Primitive',
  components: {
    PrimitiveImage
  }
}
</script>

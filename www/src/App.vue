<template>
	<div>
		<transition name="fade">
      <router-view class="child-view"></router-view>
    </transition>
	</div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
<script>
	export default {
		name: 'app'
	}
</script>

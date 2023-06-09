<template>
    <div>
        <svg :style="{ width, height }">
            <use :xlink:href=sym fill="green"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

var props = defineProps({
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: String,
    color: {
        type: String,
        default: 'red'
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
})

const sym: String = computed(() => props.prefix + props.name).value

</script>

<style scoped></style>
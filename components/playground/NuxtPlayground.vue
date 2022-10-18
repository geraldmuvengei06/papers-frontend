<script setup lang="ts">

let i:string = 'awesome'
const testImport = ref('imported')

const nuxtConfig = useRuntimeConfig()

const appConfig = useAppConfig()

</script>

<template>
    {{ testImport }}
    {{ i }}
</template>
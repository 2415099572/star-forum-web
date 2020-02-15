<template>
    <div>
        <top></top>
        <qa-details></qa-details>
    </div>
</template>

<script>

    import Top from "components/common/Top"
    import QaDetails from "./QaDetails";

    export default {
        name: "Qa",
        components: {
            Top,
            QaDetails,
        }
    }
</script>

<style scoped>

</style>
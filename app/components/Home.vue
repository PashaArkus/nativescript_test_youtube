<template>
    <Page @loaded="onLoadPage">
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout id="main-content" rows="*">
            <YoutubePlayer id="player" apiKey="axy" :src="src" :height="height"
                           :width="width" backgroundColor="gray"/>
        </GridLayout>
    </Page>
</template>

<script>
    import {Screen} from "@nativescript/core"

    export default {
        data() {
            return {
                height: 209,
                width: 372,
                src: ''
            }
        },
        methods: {
            onLoadPage() {
                setTimeout(()=>{
                    this.width = Screen.mainScreen.widthDIPs - 20;
                    this.height = (this.width / 16) * 9;
                    this.src = 'https://youtu.be/YmRuddL7efI'
                },3000)
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';
</style>

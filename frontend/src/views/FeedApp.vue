<template>
    <section class="wrappr">
        <!-- <h1>FeedApp</h1> -->
        <form class="feed-container flex wrapper">
            <input type="text" placeholder="Email" class="feed-email">
            <textarea name id cols="30" rows="10" placeholder="Message" class="feed-message"></textarea>
            <button class="feed-submit-btn">Submit</button>
        </form>
        <div class="comments-container flex wrapper">
            <!-- <filter></filter> -->
            <input type="text" placeholder="Filter" class="comments-filter">
            <div class="comments-items">comments</div>
        </div>
    </section>
</template>

<script>

export default {
    name: "FeedApp",
    data() {
        return {

        };
    },
    created() {

    },
    computed: {

    },
    methods: {

    },
    components: {

    }
};
</script>

<style lang='scss' scoped>
.flex {
    display: flex;
}

.feed-container {
    flex-direction: column;
    width: 300px;
}

.feed-email {
    margin: 3px;
}
.feed-message {
    margin: 3px;
}

.feed-submit-btn {
    margin: 3px;
    align-self: flex-end;
}
.comments-container {
    flex-direction: column;
    width: 300px;
}

.comments-filter {
    margin: 3px;
}

.comments-items{
    margin: 3px;
    height: 200px;
    border: solid 1px;
}

.wrapper {
    max-width: 100%;
    padding: 0 0px;
    margin: 0 auto;
}
</style>



<template>
  <div class="container">
    <h1>Latest Post</h1>
    <!-- Create Post HEre -->
    <div class="create-post">
      <label for="create-post">Say Something</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a Post">
      <input type="number" id="create-post" v-model.number="number" placeholder="Create a Number">
      <button v-on:click="createPost">Agrega</button>
    </div>
    <!-- Delete -->
    <hr>
    <p class="error" v-if="error" >{{error}} </p>
    <div class="post-container">
      <div class="post"
        v-for="(post, index) in post"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        @dblclick="deletePost(post._id)"
      >
      {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}

        <p class="text">text = {{post.text}} </p>
        <p class="text">number = {{post.number}}</p>
        <p class="text">ID = {{post._id}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'posts',
  data () {
    return {
        post: [],
        error: '',
        text: '',
        number: ''
    }
  },
  async created() {
      try {
          this.post = await PostService.getPosts();
      } catch (err) {
          this.error = err.message;
      }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text, this.number);
      this.post = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.post = await PostService.getPosts();
    }
  }

}
</script>

<style scoped>

div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15 px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>

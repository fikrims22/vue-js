<template>
  <div class="posts">
    <h1>Add Post</h1>
      <div class="form">
        <div>
          <input type="text" name="Title" placeholder="Title" v-model="Title">
        </div>
        <div>
          <input type="number" name="Year" placeholder="Year" v-model="Year">
        </div>
        <div>
          <input type="number" name="Price" placeholder="Price" v-model="Price">
        </div>
        <div>
          <input type="text" name="Genre" placeholder="Genre" v-model="Genre">
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/Services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      Title : '',
      Year  : '',
      Price : '',
      Genre : ''
    }
  },
  methods: {
    
    async addPost () {
      await PostsService.addPost({
        Title : this.Title,
        Year  : this.Year,
        Price : this.Price,
        Genre : this.Genre
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>



<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

<template>
  <div class="posts">
    <h1>Edit Post</h1>
    <div class="form">
       <table align="center">
        <tr>
          <td>Title</td>
          <td>Year</td>
          <td>Price</td>
          <td>Genre</td>
        </tr>
        <tr v-for="post in posts" :key="post.Id">
          <td>{{ post.Title }}</td>
          <td>{{ post.Year }}</td>
          <td>{{ post.Price }}</td>
          <td>{{ post.Genre }}</td>
        </tr>
      </table>
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
          <button class="app_post_btn" @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/Services/PostsService'
  export default {
    name: 'EditPost',
    data () {
      return {
        Title : '',
        Year  : '',
        Price : '',
        Genre : '',
        EditPosts : []
      }
    },
    mounted () {
      this.getPost()
    },
    methods: {
      async getPost () {
        const response = await PostsService.getPost({
          Id: this.$route.params.Id
        })
        this.posts = response.data.data
        // this.haha = response.data["Id"]
        // this.Title = response.data.data.Id
        // this.Year = response.data.data.Year
        // this.Price = response.data.data.Price
        // this.Genre = response.data.data.Genre
      },
      async updatePost () {
        await PostsService.updatePost({
          Id: this.$route.params.Id,
          Title: this.Title,
          Year: this.Year,
          Price: this.Price,
          Genre: this.Genre
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

  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  table th, table tr {
    text-align: left;
  }
  table thead {
    background: #f2f2f2;
  }
  table tr td {
    padding: 10px;
  }
  table tr:nth-child(odd) {
    background: #f2f2f2;
  }
  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }
  a {
    color: #4d7ef7;
    text-decoration: none;
  }
  a.add_post_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>

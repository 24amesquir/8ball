var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
function toggle(con){
  if(!con){Vue.data.message = ''}
  Vue.data = "Hello Vue!"
}
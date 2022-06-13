var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    showText : true,
    items:
    {text:'item a',color:'blue',text:'item b',color:'green'}
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    toggleTextandAdd: function (item)
    {
      item.show = !item.show
      
    }  
  }
})
function toggle(con){
  if(!con){Vue.data.message = ''}
  Vue.data = "Hello Vue!"
}
class player{
  function show(this.showen){
    player.showen = true;
  }
}
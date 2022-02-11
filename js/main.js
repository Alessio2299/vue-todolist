
var app = new Vue({
  el: '#app',
  data: {
    toDo: {
      whatToDo: "",
      done: "false"
    },
    toDoList: [],
  },
  methods: {
    addToDo(){
      this.toDoList.push(this.toDo);
      this.toDo = {whatToDo: "", done: "false"};
    },
    removeToDo(indice){ 
      this.toDoList.splice(indice,1);
    },
    doneOrNot(){
      if(this.toDo.done == "false"){
        this.toDo.done = "true";
        console.log(this.toDo.done);
      } else{
        this.toDo.done = "false";
        console.log(this.toDo.done);
      }
    }
  }
})
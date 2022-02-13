
var app = new Vue({
  el: '#app',
  data: {
    toDo: {
      whatToDo: "",
      done: "false",
      category: ""
    },
    toDoList: [],
  },
  methods: {
    addToDo(){
      this.toDoList.push(this.toDo);
      this.toDo = {whatToDo: "", done: "false", category: ""};
    },
    removeToDo(indice){ 
      this.toDoList.splice(indice,1);
    },
    doneOrNot(indice){
      if(this.toDoList[indice].done == "false"){
        this.toDoList[indice].done = "true";
      } else{
        this.toDoList[indice].done = "false";
      }
    }
  }
})

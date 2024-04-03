import inquirer from "inquirer";

//const inquirer = require("inquirer");

let todos = ["coding", "gym"];

async function createTodo() {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "Select an option",
            name: "option",
            choices: ["Add", "Update", "View", "Delete"],
        });

        if (answer.option === "Add") {
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Add task to the list",
                name: "addmore",
            });
            todos.push(addMore.addmore);
            console.log("Updated Todo List:");
            todos.forEach((task) => console.log(task));
        }

        if (answer.option === "Update") {
            let updateMore = await inquirer.prompt({
                type: "input",
                message: "Enter task to update in the list",
                name: "todo",
            });
            let index = todos.indexOf(updateMore.todo);
            if (index !== -1) {
                let updatedTask = await inquirer.prompt({
                    type: "input",
                    message: "Enter new task",
                    name: "newTask",
                });
                todos[index] = updatedTask.newTask;
                console.log("Updated Todo List:");
                todos.forEach((task) => console.log(task));
            } else {
                console.log("Task not found!");
            }
        }

        if (answer.option === "View") {
            console.log("**** TO DO LIST ****");
            console.log(todos);
            console.log("********************");
        }

        if (answer.option === "Delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                message: "Select task to delete",
                name: "deletetask",
                choices: todos,
            });
            let index = todos.indexOf(deleteTask.deletetask);
            if (index !== -1) {
                todos.splice(index, 1);
                console.log("Updated Todo List:");
                todos.forEach((task) => console.log(task));
            } else {
                console.log("Task not found!");
            }
        }
    } while (true);
}

createTodo();





























/*
import inquirer from "inquirer";


let todos = ["coding", "gym"];


async function creatTodo(todos:string[]) {
    do{
        let answer = await inquirer.prompt(
            {
                type:"list",
                message:"select an option",
                name:"option",
                choices:["Add ", "Update", "View","Delete"],
            }
        );
        if(answer.option === "Add"){
            let addMore = await inquirer.prompt(
             {
                type:"input",
                message:"Add task in the list ",
                name:"addmore",
             }   
            );
            todos.push(addMore.addmore);
            todos.forEach((addMore) => console.log(addMore));
    }
    if(answer.option === "Update"){
        let UpdateMore = await inquirer.prompt(
            {
                type:"input",
                message:"Add itemin the list ",
                name:"todo",
            }
        );
        let newTask = todos.filter((val) => val !== UpdateMore.todos);
        todos = [...newTask, addMore.todo];
        }
        if(answer.option === "View"){
            console.log("****TO DO LIST****");
            console.log(todos);
            console.log("******************");

    }
    if(answer.option === "Delete"){
        let deleteTask = await inquirer.prompt(
            {
                type:"list",
                message:"Delete task in the list ",
                name:"deletetask",
                choices:todos.map((item) => item),
            }
        );
        let newTask = todos.filter((val) => val !== deleteTask.deletetask)
        todos = [...newTask];
        console.log(todos);
        }
    }
    while(true);
}
    creatTodo(todos); 
            
    */

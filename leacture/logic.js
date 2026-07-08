
// let a = {
//     name : "xsdfghjk",
//     roll : 567,
//     numb:13456543,
// }
// a.name="sanjeev"
// console.log(a.name);


// let age = 83;

// switch (true) {
//     case age >= 18:
//         console.log('you can vote')
//         break;
        
//     default:
//         console.log("you cant vote");
// }


// let arr =[20,60,80,30,10]
// let sum =0
// for (let i of arr) {
//      sum += i; 
  
// }


//     let avg= sum/ arr.length
// console.log(avg)



////////////////////////////////////function//////////////////////////////////

// function sum (a,b){
//     return a+b;
// }
// function mult(a,b) {
//     return a*b;
// }
// let a=3,b=4;
// let res= mult(a,b)
// console.log(res)



// let devi= (a,b)=>{
// return a+b;
// }

// let a=2,b=4;
// console.log(devi(a,b));




// let btn = document.querySelector("#btn")
// btn.onclick=()=> {
//     console.log("btn are occur");   
// }



// let btn = document.querySelector("#btn")
// btn.addEventListener("click" , ()=>{
//     console.log("heloo")
// })
    
// btn.addEventListener("click" , (evt)=>{
//     console.log("heloo 2");
//     console.log(evt);
    
// })
    



/////////////////////////////////   DARK MODE    ////////////////////


// let modebtn = document.querySelector("#dark")
// let currmode = "light";
// let body = document.querySelector("body")

// modebtn.addEventListener("click", ()=>{
//     if (currmode === "light") {
//         currmode = "dark";
//        body.classList.add("dark")
//        body.classList.remove("light")
//     } else {
//         currmode = "light";
//                body.classList.add("light")
//                       body.classList.remove("dark")

//     }
//     console.log(currmode);
// });


// console.log(7);
// setTimeout(() => {
//     console.log(5);
    
// }, 3000);

// console.log(8);


// function greet(name){
//     console.log("hello ",name,"how are you")
// }

// function hi(){
//     console.log("i am high")
// }
// greet(hi())





// function loginUser(username,usernameHolder){
//     console.log("fetching data");
    
// setTimeout(()=>{
//     console.log("fetched user data");
//     usernameHolder({username})
// },3000)
// }

// loginUser("nitin",function(a){
// console.log(a)
// })




// function loginUser(username, callback) {
//   setTimeout(() => {
//     console.log("User logged in");
//     callback({ username });
//   }, 1000);
// }

// function getUserProfile(user, callback) {
//   setTimeout(() => {
//     console.log("Fetched user profile");
//     callback({ ...user, profile: "Full Profile Data" });
//   }, 1000);
// }

// function getUserPosts(profile, callback) {
//   setTimeout(() => {
//     console.log("Fetched user posts");
//     callback(["Post 1", "Post 2"]);
//   }, 1000);
// }

// function getPostComments(posts, callback) {
//   setTimeout(() => {
//     console.log("Fetched comments for posts");
//     callback(["Nice post!", "Great read!"]);
//   }, 1000);
// }

// //  Callback Hell in action
// loginUser("sanjeev", function(user) {
//   getUserProfile(user, function(profile) {
//     getUserPosts(profile, function(posts) {
//       getPostComments(posts, function(comments) {
//         console.log("Final Result:", comments);
//       });
//     });
//   });
// });



// let age =22;
// const mypro = new Promise((resovle, reject)=>{
//     setTimeout(() => {
//         if (age>18) {
//             resovle("can vote")
//         } else {
//             reject("cant vote")
//         }
//     }, 2000);
// })
// mypro
// .then(result=>console.log((result)).catch( rejection=>console.log(rejection)
// )
// )

// async function handle() {
//     try{
//         const res
//     }
// }




//     const p = document.createElement('img');
// p.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhnbV0IgN2rJmN2Wh79uuB9ls90fGmKK8SYoRL4IMtQ&s=10" ;
//    p.alt = 'Img!';

//     document.body.append(p);


////pre append aling the elment to staring of body 

// const d = document.createElement("div").innerHTML = "hello";
// document.body.prepend(d)




////////////////////////////////////// API ////////////////////////


// const url = "https://cat-fact.herokuapp.com/facts";

// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
// fetchData();



 ///////////////////// reduce method ///////////////////////////

// const cart=[{
//   name : "headphone",
//   price :2000,
//   quantity : 2 
  
// }, 
// {
//   name : "ears buds",
//   price :2000,
//   quantity : 1
  
// },{
//   name : "T.V",
//   price :22000,
//   quantity : 1
  
// },{
//   name : "tablet",
//   price :19000,
//   quantity : 1
  
// }]


// const totalPrice = cart.reduce((accumulator, item) => {
//   return accumulator + item.price * item.quantity;
// }, 0);

// console.log(`total price of cart is ${totalPrice}`);
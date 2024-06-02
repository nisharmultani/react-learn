
// Create div inside div html DOM with react 

const card = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"},[ React.createElement("h2",{},"hello this is h2 from react"),React.createElement("h1",{},"hello this is h1 from react") ]))
console.log("card",card)
 const root = ReactDOM.createRoot(document.getElementById("root"))
 console.log("root",root)
 const a = root.render(card)


  const  header = React.createElement("div",{},"this is div")
   const root2 = ReactDOM.createRoot(document.getElementById("header"))
   root2.render(header)


//   create element with  the help of React 
    //   here heading is  object not a h2 tag when we write in react or when we write this in normal JS that time its h2 tag 
    //  const heading = React.createElement("h2",{},"this is form React")
    //   const root = ReactDOM.createRoot(document.getElementById("root"))
    //  render function take this heading object and make h2 tag and server to browser 
    //   root.render(heading)



 //  make html element with the help of javascript 
//    const heading  = document.createElement("h1")
//     heading.innerHTML ="Hello World"
//   const root = document.getElementById("root")
//   const b =  root.appendChild(heading)

let a = "javascript connected"
console.log (a)

//check for scrolling on the window 
window.addEventListener ('scroll', function(){
    console.log ('user is scrolling');
})

    
// }
// I got Lost so I asked Chat GPT how to do what I was strying to do 

    window.onscroll = function() {
        const scrollPosition = window.scrollY;
        const maxDimension = Math.max(window.innerWidth, window.innerHeight); // Use the larger dimension
    
        // Calculate the new width and height based on scroll position
        const newDimension = Math.min(maxDimension, 40 + scrollPosition / 10);
    
        // Set the new width and height for the image
        document.getElementById("baseball").style.width = `${newDimension}px`;
        document.getElementById("baseball").style.height = `${newDimension}px`;
    }
    

   
  


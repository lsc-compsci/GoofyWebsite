
function showSlides()
 {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slideshow-img");

    for (let i = 0; i < slides.length; i++)  // looping through the number of 'items' in slides
    {                                    // infixes lets slides variable to access properties od .style(in css) and display(either visible of invisible)
        slides[i].style.display = "none";
    }//doesn't actually display them yet - I would think of it as loading them in first
    
    //another implicit loop here for after the first loop 'halts'
    //we're actually displaying the images here
    slideIndex++;

    if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block"; //displays the images one by one

    setTimeout(showSlides, 2000);
}

showSlides();

//it finally works wahoo

//eecs.wsu.edu/~yourname
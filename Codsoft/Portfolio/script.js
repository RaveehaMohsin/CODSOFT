

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });



    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

 
};

ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ' , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const typed = new Typed ('.multiple-text', {
    strings: ['Full-Stack Developer', 'Programmer', 'Winforms Developer' , 'Office Suite Expert' , 'Computer Scientist'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 600,
    loop: true
});



function sendEmail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,  
    };
    const serviceID="service_j8so03c";
        const templateID="template_twfnmfh";
        emailjs.send(serviceID,templateID,params)
        .then(
        (res)=>{
                name: document.getElementById("name").value="";
                email: document.getElementById("email").value="";
                phone: document.getElementById("phone").value="";
                message: document.getElementById("message").value="";
                subject: document.getElementById("subject").value="";  
                alert("Your Message Send Successfully")
            }
        )
        .catch((err)=>alert(err));
}


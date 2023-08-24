window.addEventListener("scroll", function(){
    var value = window.scrollY;
    document.querySelector('#hovering-spaceman').style.right = value * .35 + "px"
    document.querySelector('.home').style.backgroundPositionX = value * .15 + "px"
})




var isAnimated = false;

document.querySelector('.sidebar').style.left = "-15rem";
document.querySelector('.main-overlay').style.display = "none";
var isSidebar = false;
const showSidebar =() =>{
    if(!isSidebar){
        document.querySelector('.sidebar').style.left = "0";
        document.querySelector('.main-overlay').style.display = "";
        isSidebar = true;
    } else {
        document.querySelector('.sidebar').style.left = "-15rem";
        document.querySelector('.main-overlay').style.display = "none";
        isSidebar = false;
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        //document.querySelector(".header").style.padding = "30px 10px";
        document.querySelector(".header").classList.add('solidify');
        document.querySelector(".logo").style.fontSize = "25px";
        document.querySelector(".header").style.padding = "20px 10%";
        
    } else {
        document.querySelector(".header").classList.remove('solidify');
        document.querySelector(".logo").style.fontSize = "35px";
        document.querySelector(".header").style.padding = "30px 10%";
      
    }
}
function scrollFunction2() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        //document.querySelector(".header").style.padding = "30px 10px";
        document.querySelector(".header").classList.add('solidify');
        document.querySelector(".logo").style.fontSize = "25px";
        document.querySelector(".header").style.padding = "10px 5%";
        
    } else {
        document.querySelector(".header").classList.remove('solidify');
        document.querySelector(".logo").style.fontSize = "25px";
        document.querySelector(".header").style.padding = "10px 10%";
      
    }
}












if(screen.width>1200){
    window.onscroll = function() {
        scrollFunction()
    };
} else {
    window.onscroll = function() {
        scrollFunction2()
    };
}

const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
        //var pk = `${entry.target.id}`
        if(entry.isIntersecting && !isAnimated){
            
            //document.getElementById("services").innerHTML = 
            `
            
            <div class="container" style="animation:slideRight 1s ease forwards">
                <h1 class="sub-title">My <span>Services</span></h1>
                <div class="services-list">
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.3s;opacity:0;">
                        <i class="bx bxl-edge"></i>
                        <h2>Website Creation</h2>
                        <p>I create top-notch responsive websites that are fast and easy to use.</p>
                        <!--
                            <a href="#" class="read" style="--k:1.5;">Learn More</a>
                        -->
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.5s;opacity:0;">
                        <i class="bx bxl-django"></i>
                        <h2>Backend Web Development</h2>
                        <p></p>
                       
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxl-vuejs"></i>
                        <h2>Frontend Web Development</h2>
                        <p></p>
                        
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxl-vuejs"></i>
                        <h2>Frontend Web Development</h2>
                        <p></p>
                        
                    </div>
                    
                </div>
            </div>`

            document.getElementById("services").innerHTML = `
            
            <div class="container" style="animation:slideRight 1s ease forwards">
                <h1 class="sub-title"><span>Education </span> and <span>Certifications</span></h1>
                <div class="services-list">
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.3s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>B.Sc in Computer Science</h2>
                        <p style="font-size:1rem;">Caleb University Lagos</p>
                        <p style="font-size:1rem;">2020 - 2023</p>
                        <!--
                            <a href="#" class="read" style="--k:1.5;">Learn More</a>
                        -->
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.5s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>Harvard CS50X Certification</h2>
                        <p style="font-size:1rem;">Harvard University</p>
                        <p style="font-size:1rem;">2021</p>
                       
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxl-python"></i>
                        <h2>NIIT Certification</h2>
                        <p style="font-size:1rem;">Python Programming</p>
                        <p style="font-size:1rem;">2019 - 2020</p>
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>IBM Certification</h2>
                        <p style="font-size:1rem;">Introduction to Cloud Computing</p>
                        <p style="font-size:1rem;">2021</p>
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>Cisco Certification</h2>
                        <p style="font-size:1rem;">Cisco ITE 6.0 Certification</p>
                        <p style="font-size:1rem;">2019</p>
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>Cisco Certification</h2>
                        <p style="font-size:1rem;">Introduction to IOT</p>
                        <p style="font-size:1rem;">2019</p>
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxl-google"></i>
                        <h2>Google Certification</h2>
                        <p style="font-size:1rem;">Crash course in Python</p>
                        <p style="font-size:1rem;">2022</p>
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxl-google"></i>
                        <h2>Google Certification</h2>
                        <p style="font-size:1rem;">Using Python to Interact with the operating system</p>
                        <p style="font-size:1rem;">2022</p>
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>IBM Certification</h2>
                        <p style="font-size:1rem;">Introduction to Cybersecurity Tools and Cyber Attacks</p>
                        <p style="font-size:1rem;">2023</p>
                    </div>
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>IBM Certification</h2>
                        <p style="font-size:1rem;">Cybersecurity Compliance Framework and System Administration</p>
                        <p style="font-size:1rem;">2023</p>
                    </div>
                    
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>IBM Certification</h2>
                        <p style="font-size:1rem;">Cybersecurity Roles, Processes and Operating System Security</p>
                        <p style="font-size:1rem;">2023</p>
                    </div>
                    
                    <div style="animation: slideTop .5s ease-in-out forwards;animation-delay:.7s;opacity:0;">
                        <i class="bx bxs-certification"></i>
                        <h2>Udemy Certification</h2>
                        <p style="font-size:1rem;">Introduction to Arduino</p>
                        <p style="font-size:1rem;">2021</p>
                    </div>
                    
                </div>
            </div>`

            isAnimated = true;
        } 
    })
}

const observer = new IntersectionObserver(addActiveClass, options);
const buttons = document.querySelectorAll(".services")
var options = {
    threshold:.5,
};

buttons.forEach(Wbtn => {
    observer.observe(Wbtn);
})



var typed = new Typed(".text", {
    strings:[
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "software Developer"
    ],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    
});


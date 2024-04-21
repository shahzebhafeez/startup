import React,{useEffect,useState} from 'react';
import "./Home.css"
import CountUp from 'react-countup';
import Swiper from 'swiper/bundle';
import { Typewriter } from 'react-simple-typewriter';


function Home() {
  const [classname, setclassname] = useState("TitanBar");
  const [classname1, setclassname1] = useState("countup");
  const [lefthome2, setlefthome2] = useState("leftside1");
   
   
  const changeClass= () =>{
    console.log(window.scrollY);
    if (window.scrollY>=500 && window.screenY<=900){
      setclassname("TitanBarActive");
      setclassname1("countupActive")
    }
    else{
      setclassname("TitanBar");
      setclassname1("countup");
    }
    
  }
  window.addEventListener("scroll",changeClass)
  
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{
      delay:1000
    }
  });
  useEffect(() => {
    return () => {
      if (window.innerWidth > 0 && window.innerWidth<500){
        setlefthome2("lefthome2")
    }
    else{
      setlefthome2("leftside1")
    }
    };
  }, [window.innerWidth]);
  
  console.log(window.innerWidth);
  
  return (
   <> 
   <div className="msgicon"><i class="fa-solid fa-envelope fa-2xl" style={{color: '#ffffff'}}></i></div>
    <div className='home'>
      {/* <div className="NYC">
        <div className="containerNYC">
        <p className='NYCText'>NYC</p>
        </div> 
      </div> */}
      <div className="welcome">
        Welcome to Titan.
      </div>
      <div className="Title">
            Investing,<br/> Made Smarter 
      </div>
      <div className="GetStarted">
      <button className='btn-GetStarted'>
        Get Started <i class="fa-solid fa-circle-arrow-right"></i>
      </button>
      </div>
      <div className="afterLine">
        <div className="why">Why Us?</div>
        <div className="description">
        We're an award winning investment 
        manager aiming to build a Wall <br/>Street 
        firm for ambitious investors just like you. With the wealth of 
        <br/>~50,000 clients* across the United States, we aim to manage your
        <br/> money in a sophisticated, transparent way. Put us to work.
        </div>
      </div>
      
      
    </div>
    <div className="home1">
      {/* page number  */}
      <div className="page1">
        01
      </div>
      {/* left side  */}
      <div className="leftside1">
          <div className="title1">
          Manage Your Cash <br/>
          Like Institutions Do.
          </div>
          <div className="subtitle1">
          Institutional Grade Cash Management 
          </div>
          <div className="description1 ">
          Have your cash actively managed to take advantage
          <br/> of the high yields offered by Treasury money market
          <br/> funds. You’ll get our highest yield for you, SIPC
          <br/> insurance 
              , and unlimited withdrawals with no
              <br/> strings attached.
          </div>
          <button className="Explore">
            Explore <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
      </div>
      {/* Right Side */}
      <div className="rightside">
        <div className="chase">
          <p>0.01%</p>
          Chase</div>
        <div className={classname}>
          <div className={classname1}>             
          <CountUp start={0} end={5.30} duration={3} decimals={2} />
          % 
          
          </div>
          <p id="cashsmartly">Titan.</p>
        </div>
        
      </div>
    </div>
    <div className="home2">
      <div className="page1">
        02
      </div>
      {/* Left Side */}
      <div className={lefthome2}>
          <div className="title1 title2">
          A Team To Manage
          <br/> Your Investments
          <br/> For You.
          </div>
          <div className="subtitle1 subtitle2">
          <b> Actively Managed Investing </b>
          </div>
          <div className=" description1 description2 ">
          With an in-house team of investment analysts, our
          <br/> job is to help you make more money over the long
          <br/> term. From active and passive equities to
          <br/> alternatives like venture capital, you’ll get a
          <br/> sophisticated menu of products with transparency
          <br/> on how they’re managed along the way.
          </div>
          <button className="Explore2">
            Explore <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
      </div>
      {/* Right Side */}
      <div className="image-carousel">
      <div class="swiper ">
        <div class="swiper-wrapper">
          <div class="swiper-slide image1 ">image 1</div>
          <div class="swiper-slide image2">image 2</div>
          <div class="swiper-slide image3">image 3</div>  
        </div>   
      </div>   
      </div>
    </div>
    <div className="home3">
      {/* page number  */}
      <div className="page1">
        03
      </div>
       {/* Left Side */}
       <div className="leftside1 leftside3">
          <div className="title1 title3">
          Investment Advisors
          <br/> To Guide You.
          </div>
          <div className="subtitle1">
          <b> In-House Investment Advice </b>
          </div>
          <div className="description1">
          We believe in exceptional service. We know
          <br/> sometimes you want to speak with an actual human.
          <br/> Curious for our outlook on the markets? Need help
          <br/> reallocating your investments? We can guide you
          <br/> through it all.
          </div>
      </div>
      {/* right side */}
      <div className="rightside3">
        <div className="image">
          <div className="imagediv">.</div>
          <i class="fa-solid fa-phone"></i>
          <p>Book a call</p>
        </div>
        <div className="content">
          <div className="content1"><i class="fa-solid fa-globe"></i>Portfolio Review</div>
          <div className="content2"><i class="fa-solid fa-tags"></i>Investment Guidance</div>
          <div className="cotent3"><i class="fa-regular fa-calendar"></i>General Questions</div>
        </div>
      </div>
    </div>
    <div className="recognitions">
        <div className="testimonials">
          <Typewriter 
          words={['Humanly.','Thoughtfully.','Rigorously.','Actively.','Transparently.']}
          loop={true}
          />
        </div>
        <div className="awards">
            <div className="awards1">
                <i class="fa-solid fa-certificate"></i>
              <p><b>Telpar</b> <br/>Best financial advisory<br/> platform</p>
            </div>
            <div className="awards2">
                <i class="fa-solid fa-certificate"></i>
              <p><b>Findev Firm</b><br/>Best assessts management <br/> solution</p>
            </div>
          <div className="awards3">
              <i class="fa-solid fa-certificate"></i>
              <p><b>G Factor</b><br/>Top Most <br/> in its field</p>
          </div>
          <div className="awards4">
              <i class="fa-solid fa-certificate"></i>
              <p><b>Global Magazine</b><br/>Fastest Retail <br/>wealth Firm</p>
          </div>
        </div>
        <div className="clients">
        <div className="info">
          <b>Why ~50,000* Clients Choose Titan</b>
          <p>For a smarter approach to investing, with products and services they
            <br/> can’t get anywhere else, and real humans accessible when they
            <br/> need them.</p>
        </div>
        <button className="start">
          Get Started <i class="fa-solid fa-circle-arrow-right"></i>
        </button>

      </div>
    </div>
    
    </>  
  );
}

export default Home;

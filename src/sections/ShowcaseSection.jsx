import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

  const sectionref = useRef(null)
  const project1ref = useRef(null);
  const project2ref = useRef(null);
  const project3ref = useRef(null);

  useGSAP(() => {
  const projects = [project1ref.current, project2ref.current, project3ref.current];

  projects.forEach((cards, index) => {
    if (!cards) return; // prevent null error
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: cards,
          start: 'top bottom-=100',
        },
      }
    );
  });

  if (sectionref.current) {
    gsap.fromTo(
      sectionref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }
}, []);

  
  return (
    <div id='work' ref={sectionref} className='app-showcase'>
        <div className='w-half'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1ref}>
                    <div className='image-wrapper'>
                        <img src="assets/public/images/face1.png" alt="Face Recognition App" />
                    </div>
                    <div className='text-content'>
                        <h2>Face Recognition and Detection App for Detecting faces Accurately</h2>
                        <p className='text-white-50 md:text-xl'>
                            An app built using flutter and along with 
                            technologies such as Face Net and MobileFaceNet models 
                            for registering and detecting the faces.
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project justify-center' ref={project2ref}>
                        <div className='image-wrapper bg-[#ffefbd]'>
                            <img src="assets/public/images/sentiment_analysis.png" alt="Twitter Sentiment Analysis" />
                        </div>
                        <h1>Twitter Sentiment Analysis - Analysis of positive and negative tweets</h1>
                    </div>

                    <div className='project justify-center' ref={project3ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="assets/public/images/covid.png" alt="Covid-19 Analysis" />
                        </div>
                        <h1>Covid-19 Analysis - Analysis of covid-19 dataset</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection
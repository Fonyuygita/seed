import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map bg-black md:bg-white"  />

      <div className="relative z-20 flex flex-1 flex-col h-full xl:w-1/2 my-12 padding-">
      

    <Image className=" h-full w-full object-cover 8 md:hidden" src="/heroImage.png" alt="Random image" fill />
    <div className="absolute inset-0 bg-black opacity-60 rounded-md md:hidden"></div>
    <div className="absolute w-full h-full inset-0 flex items-center justify-center flex-col gap-5 ">
        {/* <h2 className="text-white text-3xl font-bold">Get Lost in Mountains</h2> */}
        <h1 className="bold text-1xl lg:text-4xl font-bold  text-white w-[60%] mx-auto">Skills Empowerment and Empowerment</h1>

        <Button 
            type="button" 
            title="About Us" 
            variant="btn_green" 
          />
    </div>

    <div className="flex  w-full gap-3 sm:flex-row">
          
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>


        {/*
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p> */}

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

       
      </div>

      <div className="absolute bottom-[-75px] md:relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-[#db8611] px-7 py-8  border-t-4 border-[#192936]">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Cameroon-Bamenda</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
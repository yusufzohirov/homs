import seven from "../assets/7.svg";

function Section4() {
  return (
    <section className="flex items-center justify-center gap-30">
        
      <div>
        <img src={seven} alt="" />
      </div>

      <div className="w-140">
        <h1 className="text-5xl">
          Meet international students & teachers
        </h1><br />
        <p>
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p><br />
        <button className="text-[#336DEC]">Explore teachers and students Button Text 9 Button Text</button>
      </div>



    </section>
  );
}

export default Section4;

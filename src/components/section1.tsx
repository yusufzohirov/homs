import two from "../assets/2.svg";
import tre from "../assets/3.svg";
import or from "../assets/4.svg"
function Section1() {
  return (
    <section className="flex items-center justify-center gap-40">
      <div className="w-110">
        <img src={two} alt="" /><br />
        <p>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
        <br />
        <div className="flex gap-5">
          <button className="border w-40 p-1 rounded bg-[#EA580C] text-white">Sign Up Now</button>
          <button className="text-[#326DEC]">View Demo</button>
        </div><br />

        <div>
       <img src={tre} alt="" />
        </div>
      </div>


<div>
    <img src={or} alt="" />
</div>


    </section>
  );
}


export default Section1
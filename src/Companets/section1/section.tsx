import "./section1.css";

import logo from "../../assets/section1.svg"

 function Section1() {
  return (
    <section>
        <div className="div1">
      <h1>Financial Assistance With True Purpose</h1>
      <p>We know how large objects will act, but things on a small scale.</p>
      <div className="btns">
      <button className="ggg hhh">Get Quote Now</button>
      <button className="ggg">Learn More</button>
      </div>
        </div>
        <div>
            <img src={logo} alt="" />
        </div>
    </section>
  );
}

export default Section1
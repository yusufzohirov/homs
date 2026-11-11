

import six from "../assets/6.svg"


function Section3() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-110">
        <h1 className="text-5xl">An all-in-one app that makes it easier</h1><br />
        <p>
          Est et in pharetra magna adipiscing ornare aliquam. <br />
           Tellus arcu sed consequat ac velit ut eu blandit. <br />
            Ullamcorper ornare in et egestas dolor orci. <br />
        </p><br />
      <button className="text-[#2563EB]">Find more about the app</button>
      </div>
      <div>
        <img src={six} alt="" />
      </div>
    </section>
  );
}


export default Section3
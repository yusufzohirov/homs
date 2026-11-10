import sect1  from"../assets/sect1.svg"


function Section1(){
    return(
        <section className="flex p-10 justify-center gap-40 items-center">
            <div className="w-100">
            <p className="text-2xl">Hi !</p>
            <h1 className="text-4xl">I m Muhamad Raul.a Front-End Developer</h1><br /><br />
            <p>Front-End devel oper based in Bekasi, Indonesian
I’am coding with a clean and beautiful problem
solving in mind.</p>
            </div>
            <div>
                <img src={sect1} alt="" />
            </div>

        </section>
    )
}

export default Section1
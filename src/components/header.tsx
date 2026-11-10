

function Header() {
   return (
    <header className="flex items-center justify-between p-10">
        <h1>Rauliqbal</h1>
        <div className="flex items-center gap-5">
            <p>About</p>
            <p>Passions</p>
            <p>Portfolio</p>
            <button className="w-30 bg-[#608AF5] p-2 rounded-2xl ">Contact Me</button>
        </div>
    </header>
   )
}

export default Header
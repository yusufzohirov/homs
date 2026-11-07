import "./header.css";


 export default function Header() {
  return (
    <header>

      <div className="branddiv">
        <h1>BrandName</h1>
        <p>Home</p>
        <p>Product</p>
        <p>Pricing</p>
        <p>Contact</p>
      </div>

      <div className="hh">
        <button className="btn">Login</button>
        <button className="btnlogin">Become a member -</button>
      </div>
    </header>
  );
}

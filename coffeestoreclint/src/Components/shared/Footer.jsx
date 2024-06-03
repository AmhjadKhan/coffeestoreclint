

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-500 text-base-content">
  <aside>
    <img className="h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2nPmTCZXdkGeutYrA_R4gXC2v7UGAvi7GPJpwTMdb5yNRsPFRablpUh4AhEypVVCmMY&usqp=CAU" alt="" />
    <p>Coffee shop<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer

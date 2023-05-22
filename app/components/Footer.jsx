import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Unik Group</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://nasrsouid.vercel.app/">Nasr Souid</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

"use client"
import React,{useState} from "react";
import Image from "next/image";
import img_1 from "../assets/img/gallery/gallery-1.jpg";
import img_2 from "../assets/img/gallery/gallery-2.jpg";
import img_3 from "../assets/img/gallery/gallery-3.jpg";
import img_4 from "../assets/img/gallery/gallery-4.jpg";
import img_5 from "../assets/img/gallery/gallery-5.jpg";
import img_6 from "../assets/img/gallery/gallery-6.jpg";
import img_7 from "../assets/img/gallery/gallery-7.jpg";
import img_8 from "../assets/img/gallery/gallery-8.jpg";
import { ImCancelCircle } from "react-icons/im";
const data = [
  {  _id: "id" + Math.random().toString(16).slice(2),title: "App 1", image: img_1 },
  {  _id: "id" + Math.random().toString(16).slice(2),title: "img 2", image: img_2 },
  {  _id: "id" + Math.random().toString(16).slice(2),title: "Produact 1", image: img_3 },
  {  _id: "id" + Math.random().toString(16).slice(2),title: "img 2", image: img_4 },
  {  _id: "id" + Math.random().toString(16).slice(2),title: "Book 1", image: img_5 },
  {  _id: "id" + Math.random().toString(16).slice(2),title: "img 2", image: img_6 },
  {  _id: "id" + Math.random().toString(16).slice(2),title: "branding 1", image: img_7 },
  {  _id: "id" + Math.random().toString(16).slice(2),title: "img 2", image: img_8 },
];
const Gallery = () => {
  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (el) => {
    setImageModal(true);
    setImageSource(el);
  };

  return (
    <>
      <div className={imageModal ? "image-box show-image-box" : "image-box"}>
        <div className="image-box-content">
          <Image src={imageSource} alt="" />
          <span
            className="image-box-close-btn"
            onClick={() => setImageModal(false)}
          >
            <ImCancelCircle size={30} />
          </span>
        </div>
      </div>
      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">
            {data.map((el) => {
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  key={el._id}
                  onClick={() => setImageOnModal(el.image)}
                >
                  <div className="gallery-item h-100">
                    <Image src={el.image} className="img-fluid" alt="" />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                      <i
                        className="bi bi-arrows-angle-expand"
                        onClick={() => setImageOnModal(el.image)}
                      ></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

// function Galllery() {
//   return (
//     <section id="gallery" className="gallery">
//       <div className="container-fluid">
//         <div className="row gy-4 justify-content-center">
//           <div className="col-xl-3 col-lg-4 col-md-6">
//             <div className="gallery-item h-100">
//               <Image
//                 src="assets/img/gallery/gallery-1.jpg"
//                 className="img-fluid"
//                 alt=""
//               />
//               <div className="gallery-links d-flex align-items-center justify-content-center">
//                 <a
//                   href="assets/img/gallery/gallery-1.jpg"
//                   title="Gallery 1"
//                   className="glightbox preview-link"
//                 >
//                   <i className="bi bi-arrows-angle-expand"></i>
//                 </a>
//                 <a href="gallery-single.html" className="details-link">
//                   <i className="bi bi-link-45deg"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default Gallery;

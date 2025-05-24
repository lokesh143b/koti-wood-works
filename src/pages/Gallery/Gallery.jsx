import "./Gallery.css";
import { useEffect, useState, useRef, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "/assets/koti-wood-works-logo.png";

const allCategories = {
  Furniture: [
"https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  Interiors: [
    logo,
    logo,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
    logo,
   "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    logo,
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  Woodworks: [
   "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30505262/pexels-photo-30505262/free-photo-of-elegant-outdoor-wedding-reception-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.pexels.com/photos/9566054/pexels-photo-9566054.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
  ],
};

const IMAGES_PER_LOAD = 5;

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Furniture");
  const [visibleImages, setVisibleImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setVisibleImages([]);
    setHasMore(true);
    loadMoreImages(selectedCategory, 0);
  }, [selectedCategory]);

  const loadMoreImages = (category, currentLength) => {
    setLoading(true);
    const categoryImages = allCategories[category];
    const nextImages = categoryImages.slice(
      currentLength,
      currentLength + IMAGES_PER_LOAD
    );

    setTimeout(() => {
      setVisibleImages((prev) => [...prev, ...nextImages]);
      setLoading(false);
      if (currentLength + IMAGES_PER_LOAD >= categoryImages.length) {
        setHasMore(false);
      }
    }, 500); // Simulated delay
  };

  const lastImageRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreImages(selectedCategory, visibleImages.length);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, selectedCategory, visibleImages]
  );

  const [modalImage, setModalImage] = useState(null);

  const handleDownload = (url) => {
    alert(
      "Right-click on the image and choose 'Save image as...' to download."
    );
    window.open(url, "_blank");
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 data-aos="fade-up">Our Gallery</h2>
      <p className="gallery-subtitle" data-aos="fade-up" data-aos-delay="200">
        Explore our collection of handcrafted works.
      </p>

      <div
        className="gallery-categories"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {Object.keys(allCategories).map((category) => (
          <button
            key={category}
            className={`gallery-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            disabled={loading}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {visibleImages.map((img, index) => {
          const isLast = index === visibleImages.length - 1;
          return (
            <div
              className="gallery-item"
              key={index}
              ref={isLast ? lastImageRef : null}
              data-aos="zoom-in"
              data-aos-delay={(index % 5) * 150}
            >
              <img
                src={img}
                alt={`${selectedCategory} ${index + 1}`}
                onClick={() => setModalImage(img)}
              />
            </div>
          );
        })}
      </div>

      {loading && (
        <div className="gallery-loader">
          <div className="spinner"></div>
        </div>
      )}

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Modal view" />
            <div className="modal-actions">
              <button onClick={() => handleDownload(modalImage)}>
                Download
              </button>
              <button onClick={() => setModalImage(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;

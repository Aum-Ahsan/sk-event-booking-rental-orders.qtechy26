import React from "react";
import type { HireProduct } from "../../../../types/commerce";

export function ProductDetailGallerySection({ 
  p, 
  gallery, 
  zoomed, 
  setZoomed, 
  selectedImage, 
  setSelectedImage 
}: { 
  p: HireProduct, 
  gallery: string[], 
  zoomed: boolean, 
  setZoomed: (z: boolean) => void, 
  selectedImage: string, 
  setSelectedImage: (i: string) => void 
}) {
  return (
    <div className={`product-gallery ${zoomed ? "zoomed" : ""}`}>
      <div className="detail-thumbs">
        {gallery.map((image, n) => (
          <button
            className={selectedImage === image ? "active" : ""}
            onClick={() => setSelectedImage(image)}
            key={`${image}-${n}`}
          >
            <img src={image} alt={`${p.name} view ${n + 1}`} />
          </button>
        ))}
      </div>
      <button
        className="main-product-image"
        onClick={() => setZoomed(!zoomed)}
        aria-label="Toggle product image zoom"
      >
        <img src={selectedImage} alt={p.name} />
      </button>
      <div className="image-assurance">
        <span>◉ Real product image supplied for this rental item</span>
        <button onClick={() => setZoomed(!zoomed)}>
          ⌕ {zoomed ? "Reset zoom" : "Zoom image"}
        </button>
      </div>
    </div>
  );
}
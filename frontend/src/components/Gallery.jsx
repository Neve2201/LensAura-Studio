function Gallery() {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600', alt: 'Wedding' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', alt: 'Couple' },
    { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600', alt: 'Portrait' },
    { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600', alt: 'Event' },
    { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600', alt: 'Camera' },
    { src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=600', alt: 'Photography' },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">Featured moments</p>
        <h2>Our Gallery</h2>
        <p>Every photograph is thoughtfully composed to reflect emotion, elegance, and atmosphere.</p>
      </div>

      <div className="gallery-container">
        {photos.map((photo) => (
          <div className="card" key={photo.alt}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
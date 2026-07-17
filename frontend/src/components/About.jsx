function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <p className="eyebrow">About us</p>
        <h2>About LensAura Studio</h2>

        <p>
          At LensAura Studio, we believe every picture tells a story.
          Our passionate team captures unforgettable moments with creativity,
          elegance, and professionalism.
        </p>

        <p>
          From weddings to birthdays, portraits to corporate events,
          we create timeless memories that stay close to your heart.
        </p>

        <a className="btn" href="#contact">Learn More</a>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800"
          alt="Photographer"
        />
      </div>
    </section>
  );
}

export default About;
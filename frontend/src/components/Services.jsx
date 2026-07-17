function Services() {
  const services = [
    {
      title: '💍 Wedding Photography',
      description: 'Cinematic coverage for your ceremony, reception, and every heartfelt detail.',
    },
    {
      title: '🎂 Birthday Shoots',
      description: 'Playful and polished photography for the most joyful milestones.',
    },
    {
      title: '👨‍👩‍👧 Family Portraits',
      description: 'Warm portraits that celebrate your family in timeless, natural light.',
    },
    {
      title: '🎥 Videography',
      description: 'Elevated storytelling through cinematic reels, highlights, and event films.',
    },
  ];

  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p className="eyebrow">What we offer</p>
        <h2>Our Services</h2>
        <p>Thoughtful planning, artistic execution, and a seamless experience from start to finish.</p>
      </div>

      <div className="service-container">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
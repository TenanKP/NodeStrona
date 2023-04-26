import React from 'react';

export default function BrowserSection({ name, logo, description }) {
  return (
    <section>
      <h2>{name}</h2>
      <img src={logo} alt={name} />
      <p>{description}</p>
    </section>
  );
}

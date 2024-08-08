import React  from 'react';
import "../App.css";

const Places = ({ data }) =>{
  return (
    <section>
      {data?.map(({ title, desc, id, image }) => {
        return (
          <div className="card" key={id}>
            <h1>{title}</h1>
            <nav>
              <img src={image} alt="alternate-text" />
              <div className="overlay">
                <div>{desc}</div>
              </div>
            </nav>
          </div>
        );
      })}
    </section>
  );
}

export default Places;

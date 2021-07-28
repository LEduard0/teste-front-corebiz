import React from "react";

const Newsletter: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="newsletterContainer">
      <form action="" onSubmit={handleSubmit}>
        <div className="newsletterTitleContainer">
          <h4>Participe de nossas news com promoções e novidades!</h4>
        </div>
        <div className="newsletterWrapper">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              onChange={(e) => {}}
              className=""
            />
            <span className="NewsletterErrorLabel"></span>
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email"
              onChange={(e) => {}}
              className=""
            />
            <span className="NewsletterErrorLabel"></span>
          </div>
          <button type="submit">Eu quero!</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;

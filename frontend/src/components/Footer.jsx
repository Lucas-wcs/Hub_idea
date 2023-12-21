import React from "react";

function Footer() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="container-footer">
      <p>
        <a
          className="lien-hypertext"
          href="mailto:contact@hub_idea.com?subject=HTML link"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          contact@hub_idea.com
        </a>
        {showTooltip && (
          <span className={`tooltip ${showTooltip ? "show" : ""}`}>
            Un problème ? une question ? Contactez-nous !
          </span>
        )}
      </p>
      <p className="text-footer">©2023 Hub_Idea. Tous droits réservés.</p>
    </div>
  );
}

export default Footer;

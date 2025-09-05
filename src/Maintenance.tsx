import React from "react";

export default function Maintenance() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
      backgroundImage: "url('/accueil.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    }}>
      
      {/* Section texte semi-transparente */}
      <div style={{
        backgroundColor: "rgba(0,0,0,0.4)", // fond noir translucide
        padding: "30px",
        borderRadius: "15px",
        color: "#fff",
        textAlign: "center",
        maxWidth: "90%",
        width: "600px",
        backdropFilter: "blur(5px)", // flou léger derrière
      }}>
        {/* Logo */}
        <img 
          src="/Logoo.png"
          alt="Logo ALDI International Trading"
          style={{
            width: "120px",
            maxWidth: "80%",
            marginBottom: "20px",
            objectFit: "contain",
            filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.7))"
          }}
        />

        {/* Titre */}
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)"
        }}>
          🚧
          <br />
           Aldi International Trading 
        </h1>

        {/* Message de maintenance */}
        <p style={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
        }}>
          Nous effectuons actuellement une maintenance pour améliorer le site.<br /><br />
          Merci de votre patience et de votre confiance 🙏
        </p>
      </div>
    </div>
  );
}

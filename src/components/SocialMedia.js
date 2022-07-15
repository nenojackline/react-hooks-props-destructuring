import React from "react";

function SocialMedia({ socialLinks }){
    const { github, linkedin } = socialLinks;
    return (
      <div>
        <a href={github}>{github}</a>
        <br></br>
        <a href={linkedin}>{linkedin}</a>
      </div>
    )
  }

  export default SocialMedia;
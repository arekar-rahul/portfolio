import "../css/socialMedia.css";
import React from "react";
type Props = {};

const SocialMedia = (props: Props) => {
  const socialmediaList = [
    { alt: "Linkedin", class: "fa fa-linkedin" },
    { alt: "Github", class: "fa fa-github-square" },
    { alt: "Instagram", class: "fa fa-instagram" },
  ];

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (e.currentTarget.id) {
      case "Linkedin":
        window.open("https://www.linkedin.com/in/rahul-arekar/");
        break;

      case "Github":
        window.open("https://github.com/arekar-rahul");
        break;

      case "Instagram":
        window.open(
          "https://instagram.com/_arekar_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        );
        break;
    }
  };

  const onMouseEnterOnButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add("icon-hover");
  };

  const onMouseLeaveOnButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove("icon-hover");
  };

  return (
    <div className={`socialMedia socialMedia`}>
      Find Me On
      <div className="socialMediaWrapper">
        {socialmediaList.map((item, index) => (
          <button
            key={index}
            className={`${item.class} fa`}
            id={item.alt}
            onClick={onButtonClick}
            onMouseEnter={onMouseEnterOnButton}
            onMouseLeave={onMouseLeaveOnButton}
          ></button>
        ))}
      </div>
      {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vQxt5UzIrorONHE2C8hL0x0qJsj4hOEmViQ2oGLNsUNbdPl28d5dQi4BNOQM5l1Mg_J1kG84DwTU9xk/pub?embedded=true"></iframe> */}
    </div>
  );
};

export default SocialMedia;

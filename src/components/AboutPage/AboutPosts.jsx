import { useState } from "react";
import { Button } from "react95";
import "./AboutPage.css";
import school from "../../images/school.png";
import py from "../../images/py.gif";
import first_hackathon from "../../images/first_hackathon.jpg";
import zelp from "../../images/zelp.png";
import pter from "../../images/pter.png";
import venus from "../../images/venus.jpg";
import webdev from "../../images/webdev.png";
import udemy from "../../images/udemy.png";
import ctc from "../../images/ctc.webp";
import cpp from "../../images/cpp.png";
import firstplace from "../../images/firstplace.jpg";
import zotpals from "../../images/zotpals.png";
import havefun from "../../images/havefun.png";
import hackuci2022 from "../../images/hackuci2022.jpg";
import zotnfound_big from "../../images/zotnfound_big.png";
import zotnfound_win from "../../images/zotnfound_win.png";
import zotnfound_icssc from "../../images/zotnfound_icssc.png";
import s2t from "../../images/s2t.jpg";
import s2t_cleanup from "../../images/s2t_cleanup.jpg";
import IH_24 from "../../images/IH_24.jpg";
import LAHacks from "../../images/LAHacks.jpg";
import VH24 from "../../images/VH24.jpg";
import coinbase from "../../images/coinbase.jpg";

import Post from "./Posts/Post";

const postsData = [
  {
    post_img: school,
    date: "August, 2021 🌎",
    description: "UCI🎓: Major in Computer Science, Class of 2025",
  },
  {
    post_img: py,
    date: "August, 2021 🌎",
    description: "Python: My first language (ICS-31)",
  },
  {
    post_img: [first_hackathon, zelp],
    date: "ZotHacks 2021 🌎",
    description: "FIRST HACKATHON! OHHH THAT'S HOW WEBSITE ARE MADE",
    isLarge: true,
  },
  {
    post_img: [venus, pter],
    date: "May 20, 2022 🌎",
    description: "2ND Hackathon. didnt win but we had soo muchh fun",
    isLarge: true,
  },
  {
    post_img: [webdev, udemy],
    date: "Summer, 2022 🌎",
    description: "I JUST LEARNED WEB DEV ONLINE!",
    isLarge: true,
  },
  {
    post_img: ctc,
    date: "October, 2022 🌎",
    description: "Developer at Commit The Change! Wohooooooooo!",
  },
  {
    post_img: cpp,
    date: "Winter, 2022 🌎",
    description: "Data Structure and Algorithm class IS HARDDDDD!!!😔",
  },
  {
    post_img: [firstplace, zotpals],
    date: "Webjam 2022 🌎",
    description: "Webjam 2022: FIRST PLACE LESSS GOO!🏆",
    isLarge: true,
  },
  {
    post_img: [hackuci2022, havefun],
    date: "HACK @ UCI 2023 🌎",
    description: "HACK @ UCI 2023: ANOTHER HACKATHON ANOTHER W!🏅",
    isLarge: true,
  },
  {
    post_img: [zotnfound_win, zotnfound_big],
    date: "Venus Hack 2023 🌎",
    description: "Venus Hack 2023: SECOND PLACE🏅",
    isLarge: true,
  },
  {
    post_img: zotnfound_icssc,
    date: "October 2023 🌎",
    description:
      "Launched Zotnfound and successfully pitched it to ICSSC, attracting 100+ sign-up users in the first 6 weeks!🚀🚀🚀",
    isLarge: true,
  },
  {
    post_img: [s2t, s2t_cleanup],
    date: "Fall 2023 🌎",
    description: "Tech Lead for Stand Up To Trash Project (CTC) 🤓",
    isLarge: true,
  },
  {
    post_img: IH_24,
    date: "January 2024 🌎",
    description: "Irvine Hack 2024 (6th Hackathon) 🏆🏆🏆",
    isLarge: true,
  },
  {
    post_img: LAHacks,
    date: "April 2024 🌎",
    description: "LA Hack 2024 (7th Hackathon) 🏙️🏙️🏙️",
    isLarge: true,
  },
  {
    post_img: VH24,
    date: "May 2024 🌎",
    description: "LA Hack 2024 (8th Hackathon) 🎁🎁🎁",
    isLarge: true,
  },
  {
    post_img: coinbase,
    date: "Summer 2024 🌎",
    description: "I'm a SWE Intern @ Coinbase this Summer!🚀",
    isLarge: true,
  },
];

export default function AboutPost() {
  const [latest, setLatest] = useState(false);

  const sortedPosts = latest ? postsData : [...postsData].reverse();

  return (
    <div className="all-posts">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>News Feed</h3>
        <Button
          onClick={() => {
            setLatest(!latest);
          }}
        >
          <span role="img" aria-label="recycle">
            {latest ? "⬇" : "⬆"}
          </span>
        </Button>
      </div>
      {sortedPosts.map((post, index) => (
        <Post
          key={index}
          post_img={post.post_img}
          date={post.date}
          description={post.description}
          isLarge={post.isLarge || false}
        />
      ))}
    </div>
  );
}

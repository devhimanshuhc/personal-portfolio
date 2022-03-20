import img1 from "../img/portImages/news.png";
import img2 from "../img/portImages/resp.png";
import img3 from "../img/portImages/trvlr.png";

const portfolios = [
  {
    id: 1,
    category: "Javascript",
    image: img3,
    link1: "https://github.com/devhimanshuhc/travel-site",
    link2: "https://trvlr.vercel.app/",
    title: "TRVLR",
    text: "It's a traveling website where you can book your vacation destination",
  },
  {
    id: 2,
    category: "Javascript",
    image: img2,
    link1: "https://github.com/devhimanshuhc/responsive-website",
    link2: "https://responsiveweb.vercel.app/",
    title: "Responsive website",
    text: "This is a responsive site creted HTML, CSS and Javascript",
  },
  {
    id: 3,
    category: "NewsNet",
    image: img1,
    link1: "https://github.com/devhimanshuhc/newsApp",
    link2: "https://newsnet.vercel.app/",
    title: "NewsNet",
    text: "It is a responsive news web app where you can get daily news doses.",
  },
];

export default portfolios;

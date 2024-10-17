import React from "react";

const footerText = [
  {
    title:"youtube",
    desc:"유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    link:"/",
  },
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "/",
},
{
    title: "blog",
    desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
    link: "/",
},
{
    title: "gsap",
    desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "/",
},
{
    title: "react",
    desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
    link: "/",
},
{
    title: "vue",
    desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
    link: "/",
},
{
    title: "next",
    desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
    link: "/",
},
];
const Footer = () => {
  return (
    <div>
      <footer id="footer" role="contentinfo">
        <div class="footer__inner">
          <h2 class="footer__text">
            <span>Webstroyboy</span>
            <span>@webs</span>
          </h2>
          <div class="footer__info">
            <div class="left">
              <div class="title">
                <a href="#">sign up</a>
              </div>
              <p class="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
            </div>
            <div class="right">
              <h3>social</h3>
              <ul>
                {footerText.map((footer,key) => (
                  <li key={key}>
                    <a href={footer.link}>{footer.title}</a>
                    <em>{footer.desc}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="footer_right">
            &copy; webstoryboy <br />
              이사이트는 비트를 이용하여 제작하였습니다.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;

import React from "react";

const siteText = [
  {
    text:["make","site compliant with","webstandard"],
    title:"vite를 이용한 사이트 제작",
    code:"https://github.com/Kim-YS52/port2024-vite",
    view:"https://ysweb-vite.netlify.app/",
    info:[
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, Vite",
    ],
  },
  {
    text:["make","site compliant with","react.js"],
    title:"react 이용한 사이트 제작",
    code:"https://github.com/Kim-YS52/port2024-react",
    view:"/",
    info:[
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, react",
    ],
  },
  {
    text:["make","site compliant with","vue.js"],
    title:"vue 이용한 사이트 제작",
    code:"/",
    view:"/",
    info:[
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, vue",
    ],
  },
  {
    text:["make","site compliant with","next.js"],
    title:"next 이용한 사이트 제작",
    code:"/",
    view:"/",
    info:[
      "site coding",
      "production period : two days",
      "use stack : html5/css3, CSS Variable, next.js",
    ],
  },
];
const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((site,key) => (
            <article className={`site__item s${key+1}`} key={key}>
              <span className="num">{key+1}</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href="{site.code}">code</a>
                <a href="{site.view">view</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))};
        </div>
      </div>
    </section>
  )
}

export default Site;

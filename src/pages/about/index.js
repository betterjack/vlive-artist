import React from "react";
import LayoutTop from "../../components/layouttop.js";
import "../styles.css";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="layout--2CJge">
        <LayoutTop />
        <div className="layout_main--2iozc">
          <div className="snb--dI3H2">
            <nav className="nav--Lwe6x"></nav>
          </div>
          <div className="snb_dimmed--IZGKU"></div>
          <div className="layout_content--3-hGQ">
            <div className="lnb--3RTnS -right_menu_text--23eET">
              <div className="lnb_inner--1EWFM">
                <h2 className="lnb_pc_title--1lAio">이건 무슨 페이지냐</h2>
                <a 
                  href="https://vlivearchive.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vlive Archive 원 소스 사이트 보기
                </a>
              </div>
            </div>
            <div className="lnb--3RTnS -right_menu_text--23eET">
              <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                <h2>왜 만들었나요?</h2>
                <p>
                  Vlive가 끝난 뒤로 누가 아카이브 페이지를 만들었는데, 오픈소스라길래 커스텀 해서 쓰려고 가져왔어요.
                </p>
                <p>
                  <br></br>
                </p>
                <h2>어떤 콘텐츠를 볼 수 있나요?</h2>
                <p>
                  일단은 우주소녀 위주로 정리하려하는데, 다른 그룹도 원하면 해줄지도
                </p>
                <p>
                </p>
                <p>
                  일단은 라이브 콘텐츠만 업로드 되어있어요. 우쭈나 녹화로 방영된 콘텐츠는 유튜브에도 있기 때문에 가져오지 않았다고 하네요.
                </p>
                <br></br>
                <h2>나도 도와주고 싶어요</h2>
                <p>
                  컨택 환영..인데 뭐가 필요한지 모르겠음
                </p>
                <p>
                  이거 원 저자한테 기부해주세요 on Buy Me A Coffee (@jonathanlam).
                </p>
                <br></br>
                <h2>Will this site be taken down?</h2>
                <br></br>
                <p>
                  This site is run independently of V LIVE servers and will not
                  be affected by the shut down. The site is also independent of
                  parties like Google Drive or YouTube so those companies also
                  cannot shut down my site.
                </p>
                <br></br>
              </div>
            </div>
          </div>
          <div className="layout_right--2_POD">
            <a
              href="https://www.wjsnguide.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="channel_share_button--jm5Vl">
                우주소녀 입덕가이드
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  className="icon_button--3GCg5"
                >
                  <g
                    stroke="#2B2B2E"
                    stroke-width="1.6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14.208 6.3L16.9 3.604 14.2.9"></path>
                    <path d="M16.17 3.605h-1.56c-3.103 0-5.619 2.516-5.619 5.62"></path>
                    <path d="M16 9.225V14.4c0 .994-.806 1.8-1.8 1.8H3.4c-.994 0-1.8-.806-1.8-1.8V4.5c0-.994.806-1.8 1.8-1.8h2.712"></path>
                  </g>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

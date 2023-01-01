import React, { useState } from "react";
import { Link } from "react-router-dom";

const LayoutTop = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleLanguageOpen = () => {
    setLanguageOpen(!languageOpen);
  };

  const handleSetEng = () => {
    setLanguage("English");
    setLanguageOpen(!languageOpen);
  };

  const handleSetKor = () => {
    setLanguage("한국어");
    setLanguageOpen(!languageOpen);
  };

  return (
    <>
      <div className="layout_top">
        <div className="gnb--1pa9M">
          <h1 className="heading--2tVTX">
            <Link to="/" className="heading_link--18fPh">
              <svg
                width="100"
                height="30"
                viewBox="0 0 100 30"
                className="logo--x4rC8"
              >
                <defs>
                  <path
                    id="a"
                    d="M4.686.073c-.319.003-.64.039-.963.111C2.42.477 1.336 1.262.672 2.394.008 3.526-.177 4.934.175 6.16l1.722 6.131C1.12 13.13.68 14.245.68 15.4v3.938c.154 5.736 4.794 10.06 10.794 10.06 2.517 0 4.863-.777 6.784-2.247 1.814-1.39 3.118-3.342 3.691-5.523 1.09-.502 1.794-1.422 2.206-2.87l.755-2.657c.28-1.003.342-2.48-.331-3.615-.895-1.512-2.194-2.17-3.963-2.003-.299-.767-1.072-1.918-2.62-2.224l.577-2.055c.378-1.19.211-2.59-.448-3.747-.668-1.175-1.767-1.983-3.093-2.274-2.429-.534-4.876.98-5.572 3.447l-.079.359-.079-.362C8.702 1.504 6.815.09 4.76.073h-.073zm5.958 10.39l1.731-5.997c.259-.915 1.147-1.489 2.014-1.292 1.305.295 1.467 1.555 1.281 2.151l-2.03 7.233c-.383-.159-.796-.245-1.214-.245H5.053L3.092 5.324c-.242-.86.229-1.922 1.28-2.15.873-.19 1.757.377 2.014 1.29l1.732 6c.33 1.028 1.263 1 1.263 1h.015c.122 0 .937-.036 1.248-1zm4.463 8.786c-.415-.09-.876-.409-1.09-.936.9-.582 1.524-1.616 1.565-2.797.024-.68-.183-1.334-.583-1.884l.421-1.481c.209-.736.952-1.406 1.829-1.198 1.11.265 1.326 1.312 1.142 1.973l-1.455 5.126c-.21.735-.846 1.23-1.527 1.23-.1 0-.201-.01-.302-.033zm4.731-.204c-.936-.217-1.222-1.18-1.062-1.7.01-.03.797-2.818.81-2.855.22-.607.824-1.15 1.62-.98 1.014.215 1.21 1.296 1.036 1.79l-.754 2.655c-.143.504-.648 1.124-1.359 1.124-.093 0-.19-.01-.29-.034zm-16.127.241V15.4c0-.886.727-1.496 1.482-1.496h7.233c.28 0 1.582.177 1.582 1.657s-1.305 1.658-1.635 1.658h-4.14c-.434 0-.787.356-.787.795 0 .44.353.796.787.796h.441c1.126 0 2.008.927 2.008 2.11v.833c0 .44.353.796.788.796.435 0 .787-.356.787-.796v-.833c0-.79-.227-1.515-.621-2.11h.883c.436 1.2 1.41 1.799 2.253 1.994 1.31.302 2.505-.359 3.104-1.136.323.384.737.63 1.206.805-.667 3.427-3.717 5.865-7.631 5.865-5.213 0-7.74-4.137-7.74-7.052z"
                  ></path>
                </defs>
                <g fill="none">
                  <path
                    fill="#29282E"
                    d="M48.982 7.063v16.516h11.113v-5.511h-4.956V7.063zM61.301 23.58h6.157V7.064h-6.157zM87.067 7.063l.012 16.516h11.344v-4.732h-5.187v-1.281h4.592l-.012-4.538h-4.58v-1.232h5.041V7.063zm-45.351 0l-2.228 7.746-.245.847h-.089l-.263-.849-2.289-7.744H30.15l6.4 16.516h5.255l6.376-16.516zm38.109 0l-2.241 7.746-.244.847h-.09l-.25-.849-2.289-7.744h-6.453l6.401 16.516h5.243l6.376-16.516z"
                  ></path>
                  <use fill="#29282E" transform="translate(0 .148)"></use>
                </g>
              </svg>
              <span className="blind">VLIVE</span>
            </Link>
          </h1>
          <div className="button_area--2QGJv">
            <div className="button_wrap--3tCh_"></div>
            <div className="button_wrap--3tCh_">
              <button type="button" className="text_button--2agm9">
                Login
              </button>
            </div>
            <div className="button_wrap--3tCh_">
              <div
                role="button"
                tabindex="0"
                className="role_button--3yKgf text_button--2agm9"
                aria-disabled="false"
                onClick={handleLanguageOpen}
              >
                <div className="tooltip_wrap--1G2tM -floating--3tUph">
                  <span className="tooltip--1_jyV">
                    <span className="tooltip_text--29NRL">Language</span>
                  </span>
                </div>
                <span className="selector_text--3Ccgn" aria-hidden="true">
                  {language}
                </span>
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  className="selector_arrow--V65bg"
                >
                  <path
                    fill="#2B2B2E"
                    d="M.854.854l2.792 2.792c.196.196.512.196.708 0L7.146.854c.196-.196.196-.512 0-.708C7.053.053 6.926 0 6.793 0H1.207c-.276 0-.5.224-.5.5 0 .133.053.26.147.354z"
                  ></path>
                </svg>
              </div>
              {languageOpen && (
                <div class="dropdown_list--TVhCC">
                  <div class="option_list_wrap--3MIAt gnb_selector--1XcSU -right--qYC-P">
                    <div class="option_list_inner--2clnH -max_height_none--3HSOC">
                      <ul class="option_list--3LKju">
                        <li class="option_item--116DI">
                          <button
                            type="button"
                            className={`option_content--Emqey -button--1xdgv ${
                              language === "English" && "is_select--2FqjR"
                            }`}
                            onClick={handleSetEng}
                          >
                            <span class="option_text--1T9v2">
                              <span class="text">
                                <span class="main_text--2S-lP">English</span>
                              </span>
                            </span>
                          </button>
                        </li>
                        <li class="option_item--116DI">
                          <button
                            type="button"
                            className={`option_content--Emqey -button--1xdgv ${
                              language === "한국어" && "is_select--2FqjR"
                            }`}
                            onClick={handleSetKor}
                          >
                            <span class="option_text--1T9v2">
                              <span class="text">
                                <span class="main_text--2S-lP">한국어</span>
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LayoutTop;

import React, { useState } from "react";
import CommentIcon from "../../components/icons/comment";
import HeartIcon from "../../components/icons/heart";
// import subtitles_list from "../../assets/itzy_subtitles.json";
import * as dayjs from "dayjs";
import { Link } from "react-router-dom";
import PostAuthorDP from "../../components/icons/postAuthorDP";
// import axios from "axios";
// import { Player } from "react-tuby";
// import "react-tuby/css/main.css";

const MoreOptions = ({ handler }) => {
  return (
    <div class="option_list_wrap--3MIAt -button_layer--1FBE8 -right15--2e4o3">
      <div class="option_list_inner--2clnH">
        <ul class="option_list--3LKju">
          <li class="option_item--116DI -copy--dVBrE">
            <button type="button" class="option_content--Emqey -button--1xdgv">
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Copy URL</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -share--2Esfu">
            <button type="button" class="option_content--Emqey -button--1xdgv">
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Share</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -bookmark--3j7B6">
            <button type="button" class="option_content--Emqey -button--1xdgv">
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Bookmark</span>
                </span>
              </span>
            </button>
          </li>
          <li class="option_item--116DI -subtitles--vBl9U">
            <button type="button" class="option_content--Emqey -button--1xdgv">
              <span class="option_icon--31pt9"></span>
              <span class="option_text--1T9v2">
                <span class="text">
                  <span class="main_text--2S-lP">Create V Fansubs</span>
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const format_date = (timestamp) => {
  const d = dayjs(timestamp);
  return d.format("YYYY.MM.DD HH:MM");
};

const VideoContainer = ({
  postId,
  title,
  // officialVideo,
  // bucket,
  author,
  channel,
  artist,
}) => {
  // format as raw number but with commas
  const plays = 1
  const likes = 1
  const comments = 1
  // const video_url = `https://f004.backblazeb2.com/file/${bucket}/${postId}/${postId}-video.mp4`;

  // const [subtitles, setSubtitles] = useState(null); // = subtitles_list[postId] || [];
  const [optionsOpen, setOptionsOpen] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.vlivearchive.com/subtitles/${postId}`)
  //     .then(function (response) {
  //       setSubtitles(response.data);
  //     })
  //     .catch(function (error) {});
  // }, [postId]);

  const handleOptions = () => {
    setOptionsOpen(!optionsOpen);
  };

  // if (subtitles == null) return <>Loading</>;

  return (
    <>
      <div className="video_content--2NTB_">
        <div className="video_detail--37R_3">
          <div className="post_header--7D-xg -video--3Fg6w">
            <div className="writer_info--3Sw41">
              <div className="writer_thumbnail_wrap--JM7vB">
                <Link to={"/channel/" + channel}>
                  <div
                    className="thumbnail_wrap--1h0cv -mask--3jxwe"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <PostAuthorDP
                      image_url={"/static/img/dp/" + artist + ".png"}
                    />
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      className="mask_border--3sgzz"
                    >
                      <g stroke="#000" stroke-opacity="0.05">
                        <path d="M15,0.5 C19.0040644,0.5 22.6290644,2.12296778 25.2530483,4.74695167 C27.8770322,7.37093556 29.5,10.9959356 29.5,15 C29.5,15.4138637 29.482673,15.8236796 29.4486026,16.2287386 C28.394426,15.7603521 27.227625,15.5 26,15.5 C23.6527898,15.5 21.5277898,16.4513949 19.9895924,17.9895924 C18.4513949,19.5277898 17.5,21.6527898 17.5,24 C17.5,25.8341082 18.0809505,27.5325085 19.0686818,28.9213493 C17.7781764,29.2980794 16.412669,29.5 15,29.5 C10.9959356,29.5 7.37093556,27.8770322 4.74695167,25.2530483 C2.12296778,22.6290644 0.5,19.0040644 0.5,15 C0.5,10.9959356 2.12296778,7.37093556 4.74695167,4.74695167 C7.37093556,2.12296778 10.9959356,0.5 15,0.5 Z"></path>
                      </g>
                    </svg>
                    <span className="icon_post_writer--3Hu_I">
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <g fill="none">
                          <circle cx="6" cy="6" r="6" fill="#8D54E6"></circle>
                          <path
                            fill="#FFF"
                            stroke="#FFF"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0.2"
                            d="M8.464 4.81c.122 0 .237.055.313.15.137.174.108.425-.065.563h0l-1.223.97.396 1.39c.033.118.011.244-.06.343-.13.18-.38.22-.559.091h0L6 7.406l-1.267.911c-.18.13-.43.089-.558-.09-.072-.1-.094-.226-.06-.344l.395-1.39-1.223-.97c-.173-.138-.202-.39-.064-.562.075-.096.19-.152.313-.152H5.13l.49-1.396c.01-.025.02-.05.034-.072l-.033.072c.01-.03.025-.06.042-.085.01-.017.023-.033.036-.048l.014-.015c.012-.012.025-.024.039-.035l.026-.018c.027-.018.056-.033.087-.044l-.054.024.037-.017.017-.007.013-.004c.015-.005.031-.009.047-.012l.032-.005L6 3.145l.04.002.034.005c.016.003.032.007.047.012l.012.004.016.006c.014.006.028.012.041.02l-.057-.026c.031.011.061.026.088.044l.023.016c.015.012.03.025.043.039l.012.013c.011.012.021.025.03.038.02.028.036.06.048.095h0l.492 1.396z"
                          ></path>
                        </g>
                      </svg>
                      <span className="blind">star</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="writer_info_textarea_wrap--1x9m_">
                <div className="writer_info_textarea--1rXDF">
                  <Link
                    className="writer_link--3fEhm"
                    to={"/channel/" + channel}
                  >
                    <span className="text--3pN_c">{author}</span>
                  </Link>
                </div>
                <div className="post_info_wrap--3oPz4">
                  <span className="post_info--3AqO0">
                    date
                  </span>
                </div>
              </div>
            </div>
            <div className="tool_bar--27mXh">
              <div className="tool_item--pBQZp">
                <div className="more_option_wrap--2qHGk">
                  <button
                    type="button"
                    className="button_more_option--1klaM"
                    onClick={handleOptions}
                  >
                    <span className="blind">More</span>
                    <svg
                      width="5"
                      height="17"
                      viewBox="0 0 5 17"
                      className="icon_button--3uz1s -more--2CaVp"
                    >
                      <path
                        fill="#2b2b2e"
                        d="M2.5 12.897c.829 0 1.5.694 1.5 1.551S3.329 16 2.5 16 1 15.305 1 14.448c0-.857.671-1.551 1.5-1.551zm0-5.949c.829 0 1.5.695 1.5 1.552 0 .857-.671 1.552-1.5 1.552S1 9.357 1 8.5c0-.857.671-1.552 1.5-1.552zM2.5 1C3.328 1 4 1.695 4 2.552c0 .857-.671 1.551-1.5 1.551S1 3.41 1 2.552 1.671 1 2.5 1z"
                      ></path>
                    </svg>
                  </button>
                  {optionsOpen && <MoreOptions handler={handleOptions} />}
                </div>
              </div>
            </div>
          </div>
          <div className="detail_content_wrap--A4_IF">
            <div className="player_area--1jBsZ">
              <iframe
                width="100%"
                height="400px"
                src={`https://www.youtube.com/embed/${postId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                >
              </iframe>
            </div>
            <div className="text_area--1z8D6">
              <span className="video_title--3Vd9y">
                <em className="badge--3Jtfu video--hdj7f video_badge--28HR1 -replay--3cQGr">
                  <span className="blind">REPLAY</span>
                </em>
                <strong>{title}</strong>
              </span>
              <span className="play_count--3NwBL">Play {plays}</span>
            </div>
          </div>
          <div className="video_post_reaction--zfPbp">
            <div className="post_detail_reaction_info--2nGeq">
              <div className="reaction_wrap">
                <div className="reaction_item--2jbbr">
                  <button type="button" className="emotion_icon--27Hbu">
                    <span className="icon_heart--2fiB9">
                      <HeartIcon />
                      <span className="blind">Like</span>
                    </span>
                    <span className="count--3fVHm">{likes}</span>
                  </button>
                </div>
                <div className="reaction_item--2jbbr">
                  <button type="button" className="emotion_icon--27Hbu">
                    <span className="icon_comment--1kA5B">
                      <CommentIcon />
                      <span className="blind">Comment</span>
                    </span>
                    <span className="count--3fVHm">{comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoContainer;

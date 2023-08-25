import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function YourFanpage() {
    const { getUserId } = useSelector(root => root.ProfileReducer)
  return (
    <div className="col-lg-3">
    <aside className="sidebar static right">
      {localStorage.getItem('userID') &&
      getUserId?.fanpage?.status === 'Active' ? (
        <div className="widget">
          <h4 className="widget-title">Nhóm của bạn</h4>
          <ul className="ak-groups">
            <li>
              <figure>
                <img
                  style={{
                    width: '50px',
                    height: '50px',
                    objectfit: 'cover',
                  }}
                  src={getUserId?.fanpage?.avatar}
                  alt
                />
              </figure>
              <div className="your-grp">
                <h5>
                  <NavLink
                    to={`/fanpage/${localStorage.getItem(
                      'userID'
                    )}`}
                    title
                    style={{
                      fontSize: '20px',
                      width: '200px',
                      wordWrap: 'break-word',
                    }}
                  >
                    {getUserId?.fanpage?.fanpageName}
                  </NavLink>
                </h5>
                <NavLink to="/" title>
                  <i className="icofont-bell-alt" />
                  Thông báo
                  <span>13</span>
                </NavLink>
                <NavLink
                  to=""
                  href="group-feed.html"
                  title
                  className="promote"
                  onClick={() => {}}
                >
                  Chi tiết
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
      {/* <RecommentActivity /> */}
      {/* suggested group */}
      <div className="widget">
        <h4 className="widget-title">Giải trí</h4>
        <div className="ask-question">
          <div className="rec-events bg-purple">
            <i className="icofont-gift" />
            <h6>
              <a title href>
                Game xúc xắc
              </a>
            </h6>
            <img alt src="images/clock.png" />
          </div>
          <NavLink to="/game">Chơi game</NavLink>
        </div>
      </div>
      {/* ask question widget */}
      {/* <div className="widget">
                                  <h4 className="widget-title">Explor Events <a className="see-all" href="#" title>Xem Tất Cả</a></h4>
                                  <div className="rec-events bg-purple">
                                      <i className="icofont-gift" />
                                      <h6><a title href>BZ University good night event in columbia</a>
                                      </h6>
                                      <img alt src="images/clock.png" />
                                  </div>
                                  <div className="rec-events bg-blue">
                                      <i className="icofont-microphone" />
                                      <h6><a title href>The 3rd International Conference 2020</a></h6>
                                      <img alt src="images/clock.png" />
                                  </div>
                              </div> */}
      {/* event widget */}
      {/* <div className="widget">
                                  <span><i className="icofont-globe" /> Sponsored</span>
                                  <ul className="sponsors-ad">
                                      <li>
                                          <figure><img src="images/resources/sponsor.jpg" alt /></figure>
                                          <div className="sponsor-meta">
                                              <h5><a href="#" title>IQ Options Broker</a></h5>
                                              <a href="#" title target="_blank">www.iqvie.com</a>
                                          </div>
                                      </li>
                                      <li>
                                          <figure><img src="images/resources/sponsor2.jpg" alt /></figure>
                                          <div className="sponsor-meta">
                                              <h5><a href="#" title>BM Fashion Designer</a></h5>
                                              <a href="#" title target="_blank">www.abcd.com</a>
                                          </div>
                                      </li>
                                  </ul>
                              </div> */}
      {/* sponsord */}
      {/* <div className="widget stick-widget">
                                  <h4 className="widget-title">Who's follownig</h4>
                                  <ul className="followers">
                                      <li>
                                          <figure><img alt src="images/resources/friend-avatar.jpg" />
                                          </figure>
                                          <div className="friend-meta">
                                              <h4>
                                                  <a title href="time-line.html">Kelly Bill</a>
                                                  <span>Dept colleague</span>
                                              </h4>
                                              <a className="underline" title href="#">Follow</a>
                                          </div>
                                      </li>
                                      <li>
                                          <figure><img alt src="images/resources/friend-avatar2.jpg" />
                                          </figure>
                                          <div className="friend-meta">
                                              <h4>
                                                  <a title href="time-line.html">Issabel</a>
                                                  <span>Dept colleague</span>
                                              </h4>
                                              <a className="underline" title href="#">Follow</a>
                                          </div>
                                      </li>
                                      <li>
                                          <figure><img alt src="images/resources/friend-avatar3.jpg" />
                                          </figure>
                                          <div className="friend-meta">
                                              <h4>
                                                  <a title href="time-line.html">Andrew</a>
                                                  <span>Dept colleague</span>
                                              </h4>
                                              <a className="underline" title href="#">Follow</a>
                                          </div>
                                      </li>
                                      <li>
                                          <figure><img alt src="images/resources/friend-avatar4.jpg" />
                                          </figure>
                                          <div className="friend-meta">
                                              <h4>
                                                  <a title href="time-line.html">Sophia</a>
                                                  <span>Dept colleague</span>
                                              </h4>
                                              <a className="underline" title href="#">Follow</a>
                                          </div>
                                      </li>
                                      <li>
                                          <figure><img alt src="images/resources/friend-avatar5.jpg" />
                                          </figure>
                                          <div className="friend-meta">
                                              <h4>
                                                  <a title href="time-line.html">Allen</a>
                                                  <span>Dept colleague</span>
                                              </h4>
                                              <a className="underline" title href="#">Follow</a>
                                          </div>
                                      </li>
                                  </ul>
                              </div>whos following */}
    </aside>
  </div>
  )
}

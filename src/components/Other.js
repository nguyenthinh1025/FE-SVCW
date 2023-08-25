import React from 'react'

export default function Other() {
  return (
    <div className="col-lg-4">
    <aside className="sidebar static left">
        <div className="advertisment-box">
            <h4 className><i className="icofont-info-circle" /> advertisment</h4>
            <figure>
                <a href="#" title="Advertisment"><img src="images/resources/ad-widget2.gif" alt /></a>
            </figure>
        </div>
        <div className="widget">
            <h4 className="widget-title">Follow People <a title href="#" className="see-all">See All</a></h4>
            <ul className="invitepage">
                <li>
                    <figure>
                        <img alt src="images/resources/friend-avatar.jpg" />
                        <a href>Jack carter</a>
                    </figure>
                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <figure>
                        <img alt src="images/resources/friend-avatar2.jpg" />
                        <a href>Emma watson</a>
                    </figure>
                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <figure>
                        <img alt src="images/resources/friend-avatar3.jpg" />
                        <a href>Andrew</a>
                    </figure>
                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <figure>
                        <img alt src="images/resources/friend-avatar4.jpg" />
                        <a href>Moona Singh</a>
                    </figure>
                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <figure>
                        <img alt src="images/resources/friend-avatar5.jpg" />
                        <a href>Harry pooter</a>
                    </figure>
                    <button className="sug-like"><i className="invit">Follow</i><i className="icofont-check-alt" /></button>
                </li>
            </ul>
        </div>
        <div className="widget">
            <h4 className="widget-title">Recent Media</h4>
            <div className="recent-media">
                <figure>
                    <img src="images/resources/user-video7.jpg" alt />
                    <a className="play-btn" data-fancybox href="https://www.youtube.com/embed/vP-l9L3Ku5Y"><i className="icofont-play" /></a>
                    <span>Pool Party 2020</span>
                </figure>
                <figure>
                    <img src="images/resources/user-video10.jpg" alt />
                    <a className="play-btn" data-fancybox href="https://www.youtube.com/embed/vP-l9L3Ku5Y"><i className="icofont-play" /></a>
                    <span>Spring Break Pool</span>
                </figure>
            </div>
        </div>
        <div className="widget stick-widget">
            <h4 className="widget-title">You May Like Groups</h4>
            <ul className="suggestd">
                <li>
                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-1.jpg" alt /></a>
                    <a className="sug-title" href="#" title>Physics Shop</a>
                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-2.jpg" alt /></a>
                    <a className="sug-title" href="#" title>Sun Rise</a>
                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-3.jpg" alt /></a>
                    <a className="sug-title" href="#" title>Big Botny</a>
                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-4.jpg" alt /></a>
                    <a className="sug-title" href="#" title>King Work</a>
                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                </li>
                <li>
                    <a className="sug-pic" href="#" title><img src="images/resources/sug-page-5.jpg" alt /></a>
                    <a className="sug-title" href="#" title>18teen Guys</a>
                    <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                </li>
            </ul>
        </div>{/* Suggested groups */}
    </aside>
</div>
  )
}

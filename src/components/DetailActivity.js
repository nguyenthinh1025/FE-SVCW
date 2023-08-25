import React from "react";

export default function DetailActivity() {
  return (
    <div className="modal fade" id="img-comt">
    <div className="modal-dialog">
        <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
                <div className="row merged">
                    <div className="col-lg-9">
                        <div className="pop-image">
                            <div className="pop-item">
                                <div className="action-block">
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag">
                                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                            <line x1={7} y1={7} x2="7.01" y2={7} />
                                        </svg>
                                    </a>
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx={12} cy={10} r={3} />
                                        </svg>
                                    </a>
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                                            <line x1={12} y1={5} x2={12} y2={19} />
                                            <polyline points="19 12 12 19 5 12" />
                                        </svg>
                                    </a>
                                    <a className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={12} cy={5} r={1} />
                                            <circle cx={12} cy={19} r={1} />
                                        </svg>
                                    </a>
                                </div>
                                <figure><img src="images/resources/blog-detail.jpg" alt /></figure>
                                <div className="stat-tools">
                                    <div className="box">
                                        <div className="Like"><a className="Like__link"><i className="icofont-like" />
                                            Like</a>
                                            <div className="Emojis">
                                                <div className="Emoji Emoji--like">
                                                    <div className="icon icon--like" />
                                                </div>
                                                <div className="Emoji Emoji--love">
                                                    <div className="icon icon--heart" />
                                                </div>
                                                <div className="Emoji Emoji--haha">
                                                    <div className="icon icon--haha" />
                                                </div>
                                                <div className="Emoji Emoji--wow">
                                                    <div className="icon icon--wow" />
                                                </div>
                                                <div className="Emoji Emoji--sad">
                                                    <div className="icon icon--sad" />
                                                </div>
                                                <div className="Emoji Emoji--angry">
                                                    <div className="icon icon--angry" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="Emojis">
                                            <div className="Emoji Emoji--like">
                                                <div className="icon icon--like" />
                                            </div>
                                            <div className="Emoji Emoji--love">
                                                <div className="icon icon--heart" />
                                            </div>
                                            <div className="Emoji Emoji--haha">
                                                <div className="icon icon--haha" />
                                            </div>
                                            <div className="Emoji Emoji--wow">
                                                <div className="icon icon--wow" />
                                            </div>
                                            <div className="Emoji Emoji--sad">
                                                <div className="icon icon--sad" />
                                            </div>
                                            <div className="Emoji Emoji--angry">
                                                <div className="icon icon--angry" />
                                            </div>
                                        </div>
                                    </div>
                                    <a title href="#" className="share-to"><i className="icofont-share-alt" />
                                        Share</a>
                                    <div className="emoji-state">
                                        <div className="popover_wrapper">
                                            <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                            <div className="popover_content">
                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
                                                <ul className="namelist">
                                                    <li>Jhon Doe</li>
                                                    <li>Amara Sin</li>
                                                    <li>Sarah K.</li>
                                                    <li><span>20+ more</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popover_wrapper">
                                            <a className="popover_title" href="#" title><img alt src="images/smiles/heart.png" /></a>
                                            <div className="popover_content">
                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
                                                <ul className="namelist">
                                                    <li>Amara Sin</li>
                                                    <li>Jhon Doe</li>
                                                    <li><span>10+ more</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popover_wrapper">
                                            <a className="popover_title" href="#" title><img alt src="images/smiles/smile.png" /></a>
                                            <div className="popover_content">
                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
                                                <ul className="namelist">
                                                    <li>Sarah K.</li>
                                                    <li>Jhon Doe</li>
                                                    <li>Amara Sin</li>
                                                    <li><span>100+ more</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popover_wrapper">
                                            <a className="popover_title" href="#" title><img alt src="images/smiles/weep.png" /></a>
                                            <div className="popover_content">
                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                <ul className="namelist">
                                                    <li>Danial Carbal</li>
                                                    <li>Amara Sin</li>
                                                    <li>Sarah K.</li>
                                                    <li><span>15+ more</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>10+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="commentbar">
                            <div className="user">
                                <figure><img src="images/resources/user1.jpg" alt /></figure>
                                <div className="user-information">
                                    <h4><a href="#" title>Danile Walker</a></h4>
                                    <span>2 hours ago</span>
                                </div>
                                <a href="#" title="Follow" data-ripple>Follow</a>
                            </div>
                            <div className="we-video-info">
                                <ul>
                                    <li>
                                        <span title="Comments" className="liked">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up">
                                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                                    </path>
                                                </svg></i>
                                            <ins>52</ins>
                                        </span>
                                    </li>
                                    <li>
                                        <span title="Comments" className="comment">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                                    </path>
                                                </svg></i>
                                            <ins>52</ins>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <a title="Share" href="#" className>
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                        <circle cx={18} cy={5} r={3} />
                                                        <circle cx={6} cy={12} r={3} />
                                                        <circle cx={18} cy={19} r={3} />
                                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                    </svg></i>
                                            </a>
                                            <ins>20</ins>
                                        </span>
                                    </li>
                                </ul>
                                <div className="users-thumb-list">
                                    <a href="#" title data-toggle="tooltip" data-original-title="Anderw">
                                        <img src="images/resources/userlist-1.jpg" alt />
                                    </a>
                                    <a href="#" title data-toggle="tooltip" data-original-title="frank">
                                        <img src="images/resources/userlist-2.jpg" alt />
                                    </a>
                                    <a href="#" title data-toggle="tooltip" data-original-title="Sara">
                                        <img src="images/resources/userlist-1.jpg" alt />
                                    </a>
                                    <a href="#" title data-toggle="tooltip" data-original-title="Amy">
                                        <img src="images/resources/userlist-2.jpg" alt />
                                    </a>
                                    <span><strong>You</strong>, <b>Sarah</b> and <a title href="#">24+
                                        more</a> liked</span>
                                </div>
                            </div>
                            <div className="new-comment" style={{ display: 'block' }}>
                                <form method="post">
                                    <input type="text" placeholder="write comment" />
                                    <button type="submit"><i className="icofont-paper-plane" /></button>
                                </form>
                                <div className="comments-area">
                                    <ul>
                                        <li>
                                            <figure><img alt src="images/resources/user1.jpg" /></figure>
                                            <div className="commenter">
                                                <h5><a title href="#">Jack Carter</a></h5>
                                                <span>2 hours ago</span>
                                                <p>
                                                    i think that some how, we learn who we really are and then
                                                    live with that decision, great post!
                                                </p>
                                                <span>you can view the more detail via link</span>
                                                <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                            </div>
                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                        </li>
                                        <li>
                                            <figure><img alt src="images/resources/user2.jpg" /></figure>
                                            <div className="commenter">
                                                <h5><a title href="#">Ching xang</a></h5>
                                                <span>2 hours ago</span>
                                                <p>
                                                    i think that some how, we learn who we really are and then
                                                    live with that decision, great post!
                                                </p>
                                            </div>
                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                        </li>
                                        <li>
                                            <figure><img alt src="images/resources/user3.jpg" /></figure>
                                            <div className="commenter">
                                                <h5><a title href="#">Danial Comb</a></h5>
                                                <span>2 hours ago</span>
                                                <p>
                                                    i think that some how, we learn who we really are and then
                                                    live with that decision, great post!
                                                </p>
                                            </div>
                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                        </li>
                                        <li>
                                            <figure><img alt src="images/resources/user4.jpg" /></figure>
                                            <div className="commenter">
                                                <h5><a title href="#">Jack Carter</a></h5>
                                                <span>2 hours ago</span>
                                                <p>
                                                    i think that some how, we learn who we really are and then
                                                    live with that decision, great post!
                                                </p>
                                            </div>
                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

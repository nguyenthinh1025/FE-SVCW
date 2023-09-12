import React, { useEffect, useState } from 'react'
import { Timestamp, addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { useSelector } from 'react-redux';

export default function Message() {
    const { getUserId, arrActivityUser } = useSelector(
        (root) => root.ProfileReducer
    );
    const [chatter, setChatter] = useState();

    // const userGroups
    const [userMsgs, setUserMsgs] = useState([]);
    // const userMsgQuery = query(collection(firestore, 'messages'));
    const [formData, setFormData] = useState({
        message: userMsgs.length === 0 ? 'Hi! ✌️' : ''
    })

    const [chatRoom, setChatRoom] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const getChatter = async () => {
        const userRef = doc(firestore, "users", getUserId.userId);
        const user = await getDoc(userRef);
        if (user.exists()) {
            return user.data;
        }
        await setDoc(doc(firestore, "users", getUserId.userId), {
            coverImage: getUserId.coverImage,
            email: getUserId.email,
            userId: getUserId?.userId,
            gender: getUserId.gender,
            dateOfBirth: getUserId.dateOfBirth,
            phone: getUserId.phone,
            roleId: getUserId.roleId,
            friendIds: [],
            groupIds: [],
            username: getUserId.username,
            createOnFirebaseAt: Timestamp.fromDate(new Date()),
        });
        return await getDoc(userRef);
    }
    useEffect(() => {
        setChatter(getChatter());
        const unTrackRoom = onSnapshot(query(collection(firestore, 'messages'), orderBy('timestamp', 'asc')), (snapshot) => {
            // snapshot.docChanges().forEach((change) => {
            //     if (change.type === "added") {
            //         console.log("New message: ", change.doc.data());
            //     }
            //     if (change.type === "modified") {
            //         console.log("Modified massage: ", change.doc.data());
            //     }
            //     if (change.type === "removed") {
            //         console.log("Removed message: ", change.doc.data());
            //     }
            // })
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }));
            setUserMsgs(data);
        });
        // unsub(); dùng để ngắt kết nối với listener
    }, [])

    const handleSend = async (e) => {
        e.preventDefault()
        if (!formData.message || formData.message === '') {
            return;
        }
        try {
            const docRef = await addDoc(collection(firestore, "messages"), {
                type: "pm",
                content: formData.message,
                userId: getUserId?.userId,
                timestamp: Timestamp.fromDate(new Date()),
            });
            setFormData({ message: '' })
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // async function handleSend() {
    // try {
    // const docRef = await addDoc(collection(firestore, "messages"), {
    //     type: "pm",
    //     content: 'test',
    //     userId: getUserId?.userId,
    //     timestamp: Date()
    // });

    // const data = {
    //     name: 'phat',
    //     age: 18
    // }
    // const messageRef = doc(firestore, "messages");
    // const collection = collection(messageRef, "messages")
    // addDoc(collection, data);

    // later...
    // var docRef = await setDoc(newCityRef, { data: 'phat' });
    // console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }


    //     const chatRoomRef = doc(firestore, 'chats', 'chat_id'); // Replace 'chat_id' with the actual ID of the chat room

    //     const data = {
    //         type: 'pm',
    //         content: 'test',
    //         userId: getUserId?.userId,
    //         timestamp: Date(),
    //     };

    //     try {
    //         const docRef = await addDoc(collection(chatRoomRef, 'messages'), data);
    //         console.log('Document written with ID: ', docRef.id);
    //     } catch (e) {
    //         console.error('Error adding document: ', e);
    //     }
    // }

    return (
        <div>
            <div>
                <div className="theme-layout">
                    <section>
                        <div className="gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div id="page-contents" className="row merged20">
                                            <div className="col-lg-8">
                                                <div className="main-wraper">
                                                    {/* Message Box */}
                                                    <div className="message-box">

                                                        <h3 className="main-title">Groups</h3>
                                                        <div className="message-header">
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Laila</span>
                                                                <div className="status offline" />
                                                            </div>
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Noah</span>
                                                                <div className="status offline" />
                                                            </div>
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Maria</span>
                                                                <div className="status offline" />
                                                            </div>
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Ellie</span>
                                                                <div className="status offline" />
                                                            </div>
                                                        </div>

                                                        <h3 className="main-title">Friends</h3>
                                                        <div className="message-header">
                                                            <div className="useravatar active">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Oliver</span>
                                                                <div className="status away" />
                                                            </div>
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Sarah</span>
                                                                <div className="status online" />
                                                            </div>
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Andrew</span>
                                                                <div className="status offline" />
                                                            </div>
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Mikaly</span>
                                                                <div className="status online" />
                                                            </div>
                                                            <div className="useravatar">
                                                                <img src="images/default-avt.png" alt />
                                                                <span>Bumsy</span>
                                                                <div className="status away" />
                                                            </div>
                                                        </div>

                                                        <div className="message-content">
                                                            <div className="chat-header">
                                                                <div className="status online" />
                                                                <h6>last seen on today at 12:39</h6>
                                                                <div className="corss">
                                                                    <span className="report"><i className="icofont-flag" /></span>
                                                                    <span className="options"><i className="icofont-brand-flikr" /></span>
                                                                </div>
                                                            </div>
                                                            {/* message */}
                                                            <div className="chat-content">
                                                                <div className="date">Wednesday 25, March</div>
                                                                <ul className="chatting-area">
                                                                    {
                                                                        userMsgs.length === 0 ? (
                                                                            <p style={{ textAlign: 'center' }}>Let's say Hi!</p>
                                                                        ) : (userMsgs.map(msg => {
                                                                            return (
                                                                                <li className={getUserId?.userId === msg?.userId ? 'me' : 'you'}>
                                                                                    <figure><img src={(getUserId?.userId === msg?.userId && getUserId?.userId == ! 'none') ? getUserId?.image : "images/default-avt.png"} alt /></figure>
                                                                                    <p>{msg.content}</p>
                                                                                </li>
                                                                            )
                                                                        }))
                                                                    }
                                                                    {/* <li className="you">
                                                                        <figure><img src="images/resources/userlist-2.jpg" alt /></figure>
                                                                        <p>what's liz short for? :)</p>
                                                                    </li>
                                                                    <li className="me">
                                                                        <figure><img src="images/smiles/angry-1.png" alt /></figure>
                                                                        <p><img src="images/smiles/angry-1.png" alt /></p>
                                                                    </li>
                                                                    <li className="me">
                                                                        <figure><img src="images/resources/userlist-1.jpg" alt /></figure>
                                                                        <p>wanna know whats my second guess was?</p>
                                                                    </li>
                                                                    <li className="you">
                                                                        <figure><img src="images/resources/userlist-2.jpg" alt /></figure>
                                                                        <p>yes</p>
                                                                    </li>
                                                                    <li className="me">
                                                                        <figure><img src="images/resources/userlist-1.jpg" alt /></figure>
                                                                        <p>Disney's the lizard king</p>
                                                                    </li>
                                                                    <li className="me">
                                                                        <figure><img src="images/resources/userlist-1.jpg" alt /></figure>
                                                                        <p>i know him 5 years ago</p>
                                                                    </li>
                                                                    <li className="you">
                                                                        <figure><img src="images/resources/userlist-2.jpg" alt /></figure>
                                                                        <p>coooooooooool dude ;)</p>
                                                                    </li> */}
                                                                </ul>
                                                                <div className="message-text-container">
                                                                    <div className="more-attachments">
                                                                        <i className="icofont-plus" />
                                                                    </div>
                                                                    <div className="attach-options">
                                                                        <a href="#" title><i className="icofont-camera" /> Open Camera</a>
                                                                        <a href="#" title><i className="icofont-video-cam" /> Photo &amp; video Library</a>
                                                                        <a href="#" title><i className="icofont-paper-clip" /> Attach Document</a>
                                                                        <a href="#" title><i className="icofont-location-pin" /> Share Location</a>
                                                                        <a href="#" title><i className="icofont-contact-add" /> Share Contact</a>
                                                                    </div>
                                                                    <form onSubmit={handleSend} >
                                                                        <span className="emojie"><img src="images/smiles/happy.png" alt /></span>
                                                                        <textarea
                                                                            rows={1}
                                                                            placeholder="say something..."
                                                                            name="message"
                                                                            value={formData.message}
                                                                            onChange={handleChange}
                                                                        />
                                                                        {userMsgs.length === 0 ? (
                                                                            <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                                                                                <button type='submit' className="button primary circle" style={{ backgroundColor: '#8ab332', width: 120 }} href="#" title>Say hi! 🖐️</button>
                                                                            </div>
                                                                        ) : (
                                                                            <button title="send" type='submit'><i className="icofont-paper-plane" /></button>
                                                                        )}

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="profile-short">
                                                    <div className="chating-head">
                                                        <div className="s-left">
                                                            <h5>{getUserId?.fullName}</h5>
                                                            <p>Bạn bè</p>
                                                        </div>
                                                    </div>
                                                    <div className="short-intro">
                                                        <figure><img src="images/default-avt.png" alt /></figure>
                                                        <ul>
                                                            <li>
                                                                <span>Tên hiển thị</span>
                                                                <p>{getUserId?.fullName === 'none' ? '- - -' : getUserId?.fullName}</p>
                                                            </li>
                                                            {/* <li>
                                                                <span>Email Address</span>
                                                                <p>Sample@gmail.com</p>
                                                            </li> */}
                                                        </ul>
                                                        <a className="button primary circle" href="#" title>view Profile</a>
                                                        <a className="button primary circle danger" href="#" title>Block Chat</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <figure className="bottom-mockup"><img src="images/footer.png" alt /></figure>

                    <div className="bottombar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <span className>© copyright All rights reserved by SVCW 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer */}
                    <button onClick={() => handleSend()}>Test Send</button>
                </div>
            </div>

        </div >
    )
}

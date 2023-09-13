import React, { useEffect, useRef, useState } from 'react'
import { Timestamp, addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, setDoc, updateDoc, toDate, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { useSelector } from 'react-redux';

export default function Message() {
    const { getUserId, arrActivityUser } = useSelector(
        (root) => root.ProfileReducer
    );
    const lastChatRef = useRef(null);
    const [chatter, setChatter] = useState();
    const [userMsgs, setUserMsgs] = useState([]);
    const [formData, setFormData] = useState({
        // message: userMsgs.length === 0 ? 'Hi! ✌️' : ''
        message: ''
    })

    const userRef = doc(firestore, "users", getUserId.userId);
    const messagesRef = collection(firestore, "messages");


    const scrollToBottom = () => {
        if (lastChatRef.current) {
            lastChatRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [userMsgs]);

    const [chatRoom, setChatRoom] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function formatLastSeen(timestamp) {
        // Get the current date and time
        const currentDate = new Date();
        // Get the Firestore Timestamp as a Date object
        if (timestamp instanceof Timestamp) {
            const timestampDate = timestamp.toDate()
            if (
                currentDate.getDate() === timestampDate.getDate() &&
                currentDate.getMonth() === timestampDate.getMonth() &&
                currentDate.getFullYear() === timestampDate.getFullYear()
            ) {
                // Format as "Last Seen On Today At HH:mm"
                const hours = timestampDate.getHours().toString().padStart(2, '0');
                const minutes = timestampDate.getMinutes().toString().padStart(2, '0');
                return `Last Seen On Today At ${hours}:${minutes}`;
            } else {
                // Format as "Last Seen On DD Month YYYY At HH:mm"
                const day = timestampDate.getDate().toString().padStart(2, '0');
                const monthNames = [
                    'January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'
                ];
                const month = monthNames[timestampDate.getMonth()];
                const year = timestampDate.getFullYear();
                const hours = timestampDate.getHours().toString().padStart(2, '0');
                const minutes = timestampDate.getMinutes().toString().padStart(2, '0');
                return `Last Seen On ${day} ${month} ${year} At ${hours}:${minutes}`;
            }
        }


        // Check if the timestamp is from today

    }

    const getChatter = async () => {

        const docRef = doc(firestore, "users", getUserId.userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        }



        const user = await getDoc(userRef);
        if (user.exists()) {
            console.log('User before update: ', user.data())
            await updateDoc(userRef, {
                image: getUserId.image,
                email: getUserId.email,
                dateOfBirth: getUserId.dateOfBirth,
                phone: getUserId.phone,
                username: getUserId.username,
                lastSeen: serverTimestamp(),
                fullName: getUserId.fullName,
                roleId: getUserId.roleId,
            })
            const usr = await getDoc(userRef)
            if (usr.exists()) {
                console.log("Existed user:--", usr.data());
                return setChatter(usr.data());
            }
        }

        await setDoc(doc(firestore, "users", getUserId.userId), {
            image: getUserId.image,
            email: getUserId.email,
            userId: getUserId?.userId,
            gender: getUserId.gender,
            dateOfBirth: getUserId.dateOfBirth,
            phone: getUserId.phone,
            roleId: getUserId.roleId,
            friendIds: [],
            chatRoomIds: [],
            username: getUserId.username,
            fullName: getUserId.fullName,
            createOnFirebaseAt: serverTimestamp(),
        });
        const newUser = await getDoc(userRef)
        if (newUser.exists()) {
            console.log("data:--" + newUser.data());
            return setChatter(newUser.data());
        }
        return setChatter(newUser.data());
    }
        ;
    useEffect(() => {
        const ct = getChatter()
        setChatter(ct);
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
            console.log('Chat room message:', data);
            setUserMsgs(data);
        });
        // unsub(); dùng để ngắt kết nối với listener
    }, [])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Call the handleSend function to submit the form
            handleSend(e);
        }
    };

    const handleSend = async (e) => {
        e.preventDefault()
        if (!formData.message || formData.message === '') {
            return;
        }
        try {
            const messages = await addDoc(messagesRef, {
                type: "pm",
                content: formData.message,
                // roomId: chatRoom?.roomId,
                userId: userMsgs.length === 0 ? 'Hi! ✌️' : getUserId?.userId,
                timestamp: Timestamp.fromDate(new Date()),
            });
            setFormData({ message: '' })
            console.log("Document written with ID: ", messages.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (

        <div className="theme-layout" >
            <section>
                <div className="gap" style={{ height: '90vh' }}>
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
                                                        <h6>{formatLastSeen(chatter?.lastSeen)}</h6>
                                                        <div className="corss">
                                                            <span className="report"><i className="icofont-flag" /></span>
                                                            <span className="options"><i className="icofont-brand-flikr" /></span>
                                                        </div>
                                                    </div>
                                                    {/* message */}
                                                    <div className="chat-content">
                                                        <div className="date">Wednesday 25, March</div>
                                                        <ul className="chatting-area ">
                                                            {
                                                                userMsgs.length === 0 ? (
                                                                    <p style={{ textAlign: 'center' }}>Let's say Hi!</p>
                                                                ) : (userMsgs.map((msg, index) => {
                                                                    const isLastMessage = index === userMsgs.length - 1;
                                                                    return (
                                                                        <li
                                                                            key={index}
                                                                            ref={isLastMessage ? lastChatRef : null}
                                                                            className={getUserId?.userId === msg?.userId ? 'me' : 'you'}>
                                                                            {/* <figure><img alt={'Avatar'} src={chatter.image !== 'none' ? chatter.image : "images/default-avt.png"} /></figure> */}
                                                                            <figure><img style={{ backgroundColor: 'white', width: 30, height: 30, objectFit: 'hidden', borderRadius: '100%' }} alt={'Avatar'} src={chatter?.image === 'none' ? "images/default-avt.png" : chatter?.image} /></figure>
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
                                                                    placeholder="Nhắn tin"
                                                                    name="message"
                                                                    value={formData.message}
                                                                    onChange={handleChange}
                                                                    onKeyPress={handleKeyPress}
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
                                            <div className="chating-head" style={{ backgroundColor: '#ddebf3', marginBottom: 10 }}>
                                                <div className="s-left">
                                                    <h5>{chatter?.username}</h5>
                                                    <p>Bạn bè</p>
                                                </div>
                                            </div>
                                            <div className="short-intro">
                                                <figure><img style={{ backgroundColor: 'white', width: 300, height: 300, objectFit: 'hidden', borderRadius: '100%' }} src={chatter?.image === 'none' ? "images/default-avt.png" : chatter?.image} alt='' sizes='' /></figure>
                                                <ul>
                                                    <li>
                                                        <span>Tên</span>
                                                        <p>{getUserId?.fullName === 'none' ? '- - -' : chatter?.fullName}</p>
                                                    </li>
                                                    <li>
                                                        <span>Ngày sinh</span>
                                                        <p>{getUserId?.fullName === 'none' ? '- - -' : chatter?.dateOfBirth}</p>
                                                    </li>
                                                    <li>
                                                        <span>Email</span>
                                                        <p>{getUserId?.fullName === 'none' ? '- - -' : chatter?.email}</p>
                                                    </li>
                                                    {/* <li>
                                                                <span>Tên</span>
                                                                <p>{getUserId?.fullName === 'none' ? '- - -' : chatter?.fullName}</p>
                                                            </li> */}
                                                    {/* <li>
                                                                <span>Email Address</span>
                                                                <p>Sample@gmail.com</p>
                                                            </li> */}
                                                </ul>
                                                <a style={{ margin: 10 }} className="button primary circle" href="#" title>view Profile</a>
                                                <button className="button primary circle" style={{ margin: 10, backgroundColor: '#8ab332', width: 120 }} href="#" title>Add friend</button>
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
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux';
import ItemActivity from './ItemActivity';

export default function ListActivity (props) {
    let { arrActivity } = props
    const { userID } = useSelector((root) => root.LoginReducer);
    console.log(arrActivity);
    console.log(userID);
    return (
        <div>
            {arrActivity?.map((item, index) => {
                const detailItem = item;
                let isAlreadyLiked = false;
                let isAlreadyJoined = false;
                let isAlreadyFollowed = false;
                item?.like?.map((user) => {
                    if (user.userId === userID) {
                        console.log(user.userId === userID);
                        //item?.like?
                        isAlreadyLiked = true;
                    }
                });


                item?.followJoinAvtivity?.map((user) => {
                    console.log(user.isFollow);
                    console.log(user.isJoin);
                    console.log(user.userId);
                    console.log(userID);
                    if (user.userId === userID) {
                        isAlreadyFollowed = user.isFollow;
                        isAlreadyJoined = user.isJoin;
                    }
                });
                return <ItemActivity ItemActivity={item} index={index} isAlreadyFollowed={isAlreadyFollowed} isAlreadyJoined={isAlreadyJoined} isAlreadyLiked={isAlreadyLiked} detailItem={detailItem} />
            })}
        </div>
    )
}

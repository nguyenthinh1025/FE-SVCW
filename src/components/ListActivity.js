import React from 'react'
import { useSelector } from 'react-redux';
import ItemActivity from './ItemActivity';

export default function ListActivity (props) {
    let { arrActivity, getUserId } = props
    const { userID } = useSelector((root) => root.LoginReducer);

    return (
        <div>
            {arrActivity?.filter(item => item.status === 'Active').map((item, index) => {
                const detailItem = item;
                let isAlreadyLiked = false;
                let isAlreadyJoined = false;
                let isAlreadyFollowed = false;
                item?.like?.map((user) => {
                    if (user.userId === userID) {
                        //item?.like?
                        isAlreadyLiked = true;
                    }
                });


                item?.followJoinAvtivity?.map((user) => {
                    if (user.userId === userID) {
                        isAlreadyFollowed = user.isFollow;
                        isAlreadyJoined = user.isJoin;
                    }
                });
                return <ItemActivity ItemActivity={item} index={index} isAlreadyFollowed={isAlreadyFollowed} isAlreadyJoined={isAlreadyJoined} isAlreadyLiked={isAlreadyLiked} detailItem={detailItem} getUserId={getUserId} />
            })}
        </div>
    )
}

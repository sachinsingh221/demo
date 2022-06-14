import React,{ useEffect, useState} from "react";
import { Card, Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import userAction from '../redux/actions/userAction';

const { getUserInit, getUserDetailsInit } = userAction;

export default function Demo(){
    const dispatch = useDispatch();
    const userList = useSelector(state => state.userState.userList);
    const userDetails = useSelector(state => state.userState.userDetails);
    const [ userInfo, setUserInfo ] = useState(null);

    useEffect(()=>{
        dispatch(getUserInit());
    },[dispatch])

    useEffect(() => {
        if(userDetails.data){
            setUserInfo({...userDetails.data})
        }   
    },[userDetails])

    const getUserDetails = (userId) =>{
        console.log(userId)
        dispatch(getUserDetailsInit(userId))
    }
    return(
        <>
        {console.log(typeof userList.total)}
        {console.log(userDetails)}
        {console.log(userInfo)}
        {userInfo ? 
            <Card
                style={{
                    width: 300,
                }}
              cover={
                    <img
                    alt={`${userInfo.first_name} ${userInfo.last_name}`}
                    src={`${userInfo.avatar}`}
                    />
                  }
               title={`${userInfo.first_name} ${userInfo.last_name}`}>
                <Card.Meta description={`${userInfo.email}`}/>
            </Card>
            :
            <Card
                style={{
                    width: 300,
                }}
                title="Name">

                <Card.Meta description="User Info"/>
            </Card>
        }
        {userList.total ?
            <Pagination pageSize={1} defaultCurrent={1} total={userList.total} onChange={getUserDetails}/>
            :""}
        
        </>
    )
}
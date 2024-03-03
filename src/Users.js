 import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

import  Axios from "axios";
import { useEffect, useState } from "react";

// const users = [ // why yse conts instead of let and var??
//     {
//         id : 1,
//         name : 'ParaD'
//     },
//     {
//         id : 2,
//         name : 'Saman'
//     },
//     {
//         id : 3,
//         name : 'Nuwan'
//     },
//     {
//         id : 4,
//         name : 'Guitar'
//     }
// ];

const Users  = () => {

    const [users,setUsers] = useState([]);
    const [submitted,setSubmitted] = useState(false);

    // Set your token value
    const token = "eyJraWQiOiJrMTA2MC4xNjg3NTQ0NzM4IiwiYWxnIjoiUlM1MTIifQ.eyJzdWIiOiJmZmZmZmZmZjYyM2FlNzY4MDQwMzBiMzdkZWU0OGUwNCIsInNtc2lkIjoiMTE3NzMzNjgiLCJpc3MiOiJJRVMiLCJoY2MiOiJMSyIsInR5cGUiOiJhdCIsImV4cCI6MTcwOTE5NTU2NCwiaWF0IjoxNzA5MTg0NzY0LCJzZXNzaWQiOiJhMTVkODI0My1kY2I0LTQ2MDQtOWNkYy04MTlkNGU3N2Q4MmUifQ.VX3bXaHPX4t3TNTyCkA3PgljRmMCv2s3i6erxbr-JBYp8KQcwOo0Ettcr6cM1gLUnWXDpr40MC5ETttcGYdGQSfCeDtC9skcUzEJ6kDQ-XpEWxI1Cj7lzR1udFAFhqvRaKvGcYoRyudvvwsk4mtfCJCRcRv5DrKC2YYrrskx-Kz7u3rGNoHkDdLcwcwnitH3917zGlTHkpwvTAZs_VsrD_ZLoeWGYhNVlCaUppEfWfULXrsiEnnbsoz8qEapMu8mOKMCsMdQGVOdUCNwDsdssgNcwNPu4GBhQ0ZgEWlMQLBCP5tZZshKyJMaQFnrHoI-5SbrhnAe8a9cj0Vnf5uDDg";

    useEffect( () => {
        getUsers();
    }, [] );

    //Get users Function
    const getUsers = () => {
        Axios.get('http://localhost:8080/api/questions', {
            headers: {
                'x-authorization': token
            }
        })
        .then(response => {
            console.log(response?.data.questions);
            setUsers(response.data?.questions || [])
        }).catch(error => {
            console.error("Axios Error : ", error); // error handling / api level or global level error handlinmg
        })
    }

        //Add users Function
        const addUsers = (data) => {
            setSubmitted(true);
            const payload = {
                id: data.id,
                name :  data.name
            }

            Axios.post('http://localhost:8080/api/createQuestions',payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                console.log(payload);

            }).catch(error => {
                console.error("Axios Error : ", error); // error handling / api level or global level error handlinmg
            })
        }


    return(
        <Box 
        
        sx={{
            width: 'calc(100% - 100px)',
            margin:'auto',
            marginTop: '100px'
        }}
        >
            <UserForm addUser={addUsers} />
            <UsersTable rows={users} />
        </Box>
        
    );
}

export default Users;
import React, { useEffect, useState } from 'react';
import {Box} from "@mui/material"
import HabitItem from './HabitItem'
import { useSelector} from "react-redux";
import { db } from '../../../../index';
import { collection, getDocs }  from 'firebase/firestore';



const HabitsList = () => {
    const [habitsList, setHabitsList] = useState([]);

    // const habitsList  = useSelector((state) => {
    //     debugger;
    //     return state.habits;
    // });

    const collectionRef = collection(db, 'habits')

    useEffect(() => {
        const getHabits = async () => {
            const data = await getDocs(collectionRef);
            setHabitsList(data.docs.map((doc) => ({...doc.data(), id: doc.id })))

        }
        getHabits();
    }, []);

    if (!habitsList) {
        return (<>Error</>)
    }
    console.log(habitsList)
    return (
        <Box
            sx={{
                background: "grey",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                maxHeight: "300px",
                height: "300px",
                overflow: "auto",
                width: "100%"
            }}
        >
            {
                habitsList.map((item, index) => {
                    const { name, targetValue, currentValue } = item;
                    return (
                        <HabitItem name={name} value={currentValue}/>
                    )
                })
            }
        </Box>
    );
};

export default HabitsList;
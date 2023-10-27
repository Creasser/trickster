import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Paper } from "@mui/material";

function Stats(){
    const { user } = useContext(UserContext)

    if(!user){
        return null
    }


    //

    function completedTricks(){
        const goals = user.goals.filter((goal) => {
            return goal['is_completed'] === true
        })
       return goals.length
    }

    function highestAttemptedTrick(){
        const goals = user.goals.sort((a, b) => b.attempts - a.attempts)
        const trick = goals[0].trick
        return trick.title
    }

    function leastAttemptedTrick(){
        const goals = user.goals.sort((a, b) => a.attempts - b.attempts)
        const trick = goals[0].trick
        return trick.title
    }

    function averageDifficulty(){
        const completedTricks = user.goals.filter((goal) => {
            return goal['is_completed'] === true
        })
        const goalDifficulty = completedTricks.map((goal) => {
            return goal.trick['difficulty']
        })
        const difficultyTotal = goalDifficulty.reduce((a, b) => a + b, 0)
        return difficultyTotal / completedTricks.length
    }

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', height:'95.2vh', backgroundImage: 'url(https://wallpapercave.com/wp/oKv3Xlf.jpg)'}}>
            <h1>Stats Page</h1>
            <div style={{display:'flex'}}>
                <Paper variant="outlined" elevation={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'350px', width: '300px', backgroundColor: '#69DC9E', margin: '0px 10px 20px 10px'}}>
                    <h2>Tricks Completed</h2>
                    <h2>{completedTricks()}</h2>
                </Paper>
                <Paper variant="outlined" elevation={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'350px', width: '300px', backgroundColor: '#69DC9E', margin: '0px 10px 20px 10px'}}>
                    <h2>Most Attempted Trick</h2>
                    <h2>{highestAttemptedTrick()}</h2>
                </Paper>
                <Paper variant="outlined" elevation={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'350px', width: '300px', backgroundColor: '#69DC9E', margin: '0px 10px 20px 10px'}}>
                    <h2>Least Attempted Trick</h2>
                    <h2>{leastAttemptedTrick()}</h2>
                </Paper>
                <Paper variant="outlined" elevation={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height:'350px', width: '300px', backgroundColor: '#69DC9E', margin: '0px 10px 20px 10px'}}>
                    <h2>Average Difficulty</h2>
                    <h2>{averageDifficulty()}</h2>
                </Paper>
            </div>
        </div>
    )
}

export default Stats
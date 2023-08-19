import express from 'express'
import fetch from 'node-fetch';

let IP = "";

const getIP = async (req,res)=>{
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        IP = data.ip;
       
    } catch (error) {
        console.error("Error fetching user's IP address:", error);
        res.status(500).json(error);
    }
}

export const getLocation = async (req,res)=>{

  
    try {
        await getIP(); // Wait for getIp to complete before proceeding
        const response = await fetch(
          `https://ipinfo.io/${IP}?token=${process.env.KEY}`
        );
        const data = await response.json();
        if(data){
            res.status(200).json(data);
            console.log(data);
        }
      } catch (error) {
        console.error("Error fetching country and city:", error);
      }

}
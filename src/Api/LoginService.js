import React, { Component } from "react";
import {Toast} from 'native-base';

export function authenticateUser(username, password) {
    fetch('https://cfsfiserv.com/QEUATSMT/api/Authentication/LogIn', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    }).then(response=>{
        if(response.status = 200) {
            Toast.show({
                text: "Login successful",
                position: 'bottom',
                buttonText: 'Okay',
                duration: 5000,
                type: 'success',
            })

            // 1. save response
            //  - what data layer to use? (example - redux)
            //  - Does the response contain token?
            // navigation to account summary page

            return true;
        } else {
            return false;
        }
    });

    return true; //Comment/remove this if api call is enabled
}

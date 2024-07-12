// @flow
import * as React from 'react';

export const getItem = (key: string) => {

    let value: string | null | undefined = "";


    value = localStorage.get("user-token")
    return value
};


export const setItem = (key: string, value: string) => {
    return localStorage.setItem(key, value)
};
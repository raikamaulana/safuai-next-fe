import React from "react";

export const getEnv = () => {
    return require("../configs/app.json");
}

export const getAppByChainId = (chainId) =>{
    if(chainId === 97) return require("../configs/appChain97.json");
    if(chainId === 56) return require("../configs/appChain56.json");
}
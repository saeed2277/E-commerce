'use client';
import { AppStore, createStore, prelodedState } from "@/src/store/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

type providersProps = {
    children:ReactNode
    preloadedState:prelodedState
}

export default function Providers({children,preloadedState}:providersProps){
const storeRef = useRef<null | AppStore>(null) ;
if(!storeRef.current){
    storeRef.current = createStore(preloadedState)
}

return <>
<Provider store={storeRef.current}>
{children}

</Provider>
</>
}
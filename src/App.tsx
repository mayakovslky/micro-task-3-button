import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    // const myFirstSubscriber  = (event) => {
    //     console.log('hello')
    // }
    //
    // const mySecondSubscriber = (event) => {
    //     console.log('give me your money')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (number: number) => {
    // console.log(number)
    // }

    const Button1Foo = (subscriber: string, age:number, address: string) => {
    console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
    console.log(subscriber)
    }
    const Button3Foo = () => {
    console.log('im stupid button')
    }


    return (
        <div className={'App'}>
            {/*<button onClick ={(event) => onClickHandler('Vasya')}>myyoutubechannel</button>*/}
            {/*<button onClick ={(event) => onClickHandler('VaNya')}>myyoutubechannel-2</button>*/}
            {/*  <button onClick={foo1}>1</button>*/}
            {/*  <button onClick={(event) => foo2(100200)}>2</button>*/}

            <Button name={'myYoutubeChannel-1'} callBack={()=>Button1Foo('im vassya', 21, 'Live in Portugal')}/>
            <Button name={'myYoutubeChannel-2'} callBack={()=>Button2Foo('im vannnya')}/>
            <Button name={'myYoutubeChannel-3'} callBack={Button3Foo}/>
        </div>
    )
}

export default App;

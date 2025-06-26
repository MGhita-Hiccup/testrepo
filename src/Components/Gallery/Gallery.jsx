import React from 'react'
import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
export default function Gallery() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [isName, setIsName] = useState(false)
    useEffect(()=>{
        console.log('component didMount')
        return ()=> {
            console.log('component will UNMount')
        }
    } , [])
    /*
    useEffect(()=>setCount(Math.random()))    //=> infinit loop  
    */
    useEffect(()=>{
        if(count === 0) {
            return;
        }
        console.log('component didUpdateCount')
    } , [count])
   useEffect(()=>{
        if(name === '') {
            return;
        }
        console.log('component didUpdateName')
    } , [name])
    function ChangeCount() {
        setCount(Math.random)
    }
    function changeName() {
        setName(Math.random)
    }
    return <>
    <h2 className="text-center">Count : {count}</h2>
    <div className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>Function Component</h3>
                    <button className="btn btn-danger my-auto w-100" onClick={ChangeCount}>ChangeCount</button>
                </div>
                <div className="col-md-6">
                    <h3>Function Component</h3>
                    <button className="btn btn-danger my-auto w-100" onClick={changeName}>changeName</button>
                </div>

            </div>

        </div>
        <div className="row">
            <div className="col-md-2">
              <ul>
                <li><Link to='Web'>Web</Link></li>
                <li><Link to='Mobile'>Mobile</Link></li>
              </ul>
            </div>
            <div className="col-md-10">
                <Outlet></Outlet>
            </div>

        </div>
    
    
    
    
    </div>
    
    </> 
    
}
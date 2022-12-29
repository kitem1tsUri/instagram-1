import React from 'react';
import { PostComponent } from '../component/post-component';
import "../styles/home.css"

export const HomePage = () => {
    return (
        <div className='large-cont'>
            <div className='left-cont'>hii broder</div>
            <div className='cont'>
                <div className='feed'>
                    <div className='storys'>end story baih</div>
                    <div className='posts'>end posts baih</div>
                </div>
            </div> 
            {/* <PostComponent /> */}
        </div>
    )
}
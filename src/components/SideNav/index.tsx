import React from 'react';
import './index.css';

export const SideNav: React.FC = () => {
    return (
        <aside className="sidenav--left">
            <h4 className=''>facebook</h4>
            <div className="seperator"></div>
            <ul className="page--navigation">
                <li  className='active'>
                    <a href="#">
                        <i className="bi bi-house"></i>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-people"></i>
                        Friends
                    </a>
                    <span>114</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-person-video3"></i>
                        Groups
                    </a>
                    <span>4</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bi bi-person-bounding-box"></i>
                        Suggestion
                    </a>
                    <span>15</span>
                </li>
            </ul>
        </aside>
    )
}
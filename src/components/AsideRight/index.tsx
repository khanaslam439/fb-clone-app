import React from 'react';
import './index.css';

export const AsideRight:React.FC = () => {
    return (
        <aside className='sidenav--right'>
            <div className='contact--card'>
                <h4>Sponsorship</h4>
                <img src="https://picsum.photos/300/150" width={'100%'} alt="" />
            </div>
            <div className='contact--card'>
                <div className='flex justify-between items-start'>
                    <h4 className='mb-0'>Friend Suggestion</h4>
                    <span className='text-[12px] items-end flex gap-2'>See All <i className='bi bi-box-arrow-up-right' /></span>
                </div>
                <ul className='suggestion--list'>
                    <li>
                        <div>
                            <img src="https://picsum.photos/40/41" />
                            <p>John
                                <span>@John-handle</span>
                            </p>
                        </div>
                        <i className='bi bi-plus'></i>
                    </li>
                    <li>
                        <div>
                            <img src="//picsum.photos/41/41" />
                            <p>Doe
                                <span>@Doe-handle</span>
                            </p>
                        </div>
                        <i className='bi bi-plus'></i>
                    </li>
                    <li>
                        <div>
                            <img src="//picsum.photos/42/40" />
                            <p>James
                                <span>@James-handle</span>
                            </p>
                        </div>
                        <i className='bi bi-plus'></i>
                    </li>
                    <li>
                        <div>
                            <img src="//picsum.photos/42/41" />
                            <p>Karry
                                <span>@Karry-handle</span>
                            </p>
                        </div>
                        <i className='bi bi-plus'></i>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
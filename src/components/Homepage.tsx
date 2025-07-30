import React from 'react';
import { SideNav } from './SideNav';
import { Posts } from './Posts/Posts';
import { AsideRight } from './AsideRight';
export const Homepage: React.FC = () => {
    return (
        <main className="page-container">
            <SideNav />
            <section className='page--content'>
                <div className="content--top">
                    <div className="search-group">
                        <i className='bi bi-search'></i>
                        <input type="text" className="rounded-md" placeholder="Search for friend, groups, posts and pages." />
                    </div>
                    <button className='addpost--btn'>
                    <i className='bi bi-plus text-[18px]'></i>  New Post
                    </button>
                </div>
                <div className="seperator"></div>
                <div className='content--bottom'>
                    <Posts />
                </div>
            </section>
            <AsideRight />
        </main>
    )
}
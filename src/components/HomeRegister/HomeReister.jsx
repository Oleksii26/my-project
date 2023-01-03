import React from 'react'
import { Register } from '../Register/Register'
import css from './HomeRegister.module.css'

export const HomeReister = () => {
    return (<>
    <div className={css.containet}>
            <p>Добро пожадовать</p>
            <p>ВК - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui sed maiores perspiciatis magnam animi vero pariatur
                possimus odit provident. Nemo hic sunt animi esse,
                voluptates similique! Quam tempore dolorum odit?</p>
            <h3>Моментальная регистрация</h3>
            <Register />
            <ul>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  aut fugiat ipsam ipsa, aperiam repellat incidunt.  </li>
                <li>Dignissimos quaerat accusantium asperiores velit rerum</li>
                <li>A illo facilis unde explicabo totam neque obcaecati distinctio!</li>
            </ul>
            <ul className={css.list}>
                <li><img height='120' width='150' alt='qwe' src="https://pixlr.com/images/index/filter-effect.webp"></img></li>
                <li><img height='120' width='150' alt='qwe' src="https://cdn.serif.com/affinity/img/photo/home/0322/slider/photo-compound-masks-1810202220907.png"></img></li>
                <li><img height='120' width='150' alt='qwe' src="https://static-cse.canva.com/_next/static/assets/01_featureblock_photo-editor_desktop_w1260xh921_98bdfc1ab604cbafc7385fbbd74fcecc4159d3eca7ffe3a0066b1e995e196398.png"></img></li>
            </ul>
        </div>
    </>
        
        
    )
}

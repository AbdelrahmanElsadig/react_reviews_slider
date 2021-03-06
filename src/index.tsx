import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import { Project } from './components/Project';


const container: Element = document.querySelector('#root') as Element;
const root = createRoot(container);

root.render((
    <div className="w-full min-h-screen flex flex-col gap-0">
        <Project />
    </div>

))

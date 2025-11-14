'use-client';

import Project_card from "./project-card";
import React, { FC } from 'react'


export default function CardList(children: []) {
    return (
        {children.map(entry => {<Project_card title=entry.title body=entry.body />})}
    )
}
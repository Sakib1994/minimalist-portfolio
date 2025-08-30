"use client";
import React from 'react';

export const SectionHeader = ({ regularText, purpleText }: { regularText: string; purpleText: string; }) => {
    return <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
        {`${regularText} `}
        <span className="text-purple-400">{purpleText}</span>
    </h1>;
};

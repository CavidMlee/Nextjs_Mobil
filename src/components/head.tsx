import NextHead from "next/head";
import React from "react";

const defaultDescription = "";
const defaultKeywords = "";
const defaultOGURL = "";
const defaultOGImage = "";

type Props = {
    defaultDescription?: string;
    defaultKeywords?: string;
    defaultOGURL?: string;
    defaultOGImage?: string;
    title?:string;
    description?:string;
    keywords?:string;
    url?:string;
    ogImage?:any;
}

export const Head = (props:Props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ""}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.description || defaultDescription} />
        <meta name="keywords" content={props.keywords || defaultKeywords} />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon.svg" />
        <link rel="shortcut icon" href="/static/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon.svg" />
        <link rel="mask-icon" href="/static/favicon.ico" color="#000000" />
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ""} />
        <meta property="og:description" content={props.description || defaultDescription} />
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </NextHead>
);


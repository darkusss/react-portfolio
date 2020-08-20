const customMediaQuery: (a: number) => string = (maxWidth) => {
    return `@media (max-width: ${maxWidth}px)`;
}

export const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
}



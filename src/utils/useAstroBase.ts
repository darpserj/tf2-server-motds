function useAstroBase(arg:string){
    return import.meta.env.BASE_URL + arg
}

export {useAstroBase}
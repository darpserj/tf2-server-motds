function useIsChristmas() {
    return new Date().getMonth() === 11 || new Date().getMonth() === 0;
  }

export default useIsChristmas
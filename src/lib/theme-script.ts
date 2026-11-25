/** Runs in <head> before first paint, so a saved dark theme never flashes. */
export const themeScript = `(function(){try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`

/**
 * Theme initialization script that runs before React hydration
 * to prevent theme flashing (FOUC - Flash of Unstyled Content)
 */
export const themeScript = `
(function() {
  function getCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  function getTheme() {
    const savedTheme = getCookie('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    
    // Fallback to OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
})();
`;

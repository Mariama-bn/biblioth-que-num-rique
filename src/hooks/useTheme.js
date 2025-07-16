const useTheme = () => {
  return {
    isDarkMode: false,
    toggleDarkMode: () => {},
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      danger: '#dc3545',
    },
  };
};

export default useTheme;

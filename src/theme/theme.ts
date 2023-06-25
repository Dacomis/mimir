export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  margins: {
    sm: string;
    md: string;
    lg: string;
  };
  paddings: {
    sm: string;
    md: string;
    lg: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

const theme: Theme = {
  colors: {
    primary: "#007BFF",
    secondary: "#6C757D",
    accent: "#28A745",
  },
  margins: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
  },
  paddings: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
  },
};

export default theme;

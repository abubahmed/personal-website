import "./../styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Abu A",
  description: "Abu A's personal website",
  keywords:
    "Abu Ahmed, Abu, Ahmed, personal, portfolio, github, linkedin, projects, socials, email, resume, website, web development, machine learning, data analysis, hackathons, Bronx High School of Science, Bronx Science, NYC, New York City, computer science, software engineering, student, high school, senior, programmer, coder, designer, engineer, developer, frontend, backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-PY7LNR0RZK" />
      </body>
    </html>
  );
}

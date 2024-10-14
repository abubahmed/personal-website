import "./../styles/globals.css";

export const metadata = {
  title: "Abu Ahmed",
  description: "Abu Ahmed's personal website",
  keywords:
    "Abu Ahmed, Abu, Ahmed, personal, portfolio, github, linkedin, projects, socials, email, resume, website, web development, machine learning, data analysis, hackathons, Bronx High School of Science, Bronx Science, NYC, New York City, computer science, software engineering, student, high school, senior, programmer, coder, designer, engineer, developer, frontend, backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PY7LNR0RZK"></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-PY7LNR0RZK');
        </script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

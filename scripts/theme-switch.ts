
export default function ThemeSwitch(currentTheme: string) {
    var configPageTheme = "light";
    (currentTheme === "dark" || currentTheme === "light") ? configPageTheme = currentTheme : configPageTheme = "light";
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem("theme", "light");
    }
    localStorage.setItem("theme", configPageTheme);
}
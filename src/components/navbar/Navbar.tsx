import { ThemeToggleButton } from "@/components/theme-toggle-button";
import AppLogo from "./AppLogo";

export default function Navbar() {
    return <div className="w-screen px-8 md:px-16 h-15 flex justify-between items-center shadow-md">
        <AppLogo />
        <ThemeToggleButton />
    </div>
}
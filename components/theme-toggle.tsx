"use client"
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button onClick={toggleTheme} className="p-2 rounded-full" aria-label="Toggle theme">
            {theme === 'light' ? (
                <MoonIcon className="h-6 w-6 text-neutral-500 dark:text-white" />
            ) : (
                <SunIcon className="h-6 w-6 text-neutral-500 dark:text-white" />
            )}
        </button>
    );
};


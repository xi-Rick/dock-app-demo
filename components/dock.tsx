"use client";
import ThemeToggle from "@/components/theme-toggle";
import { Dock, DockCard, DockCardInner, DockDivider } from "@/components/ui/dock";
import { CircleIcon } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

// Custom hook to detect if the user is on a mobile device
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const isSmall = window.matchMedia("(max-width: 768px)").matches;
        const isMobileDevice = Boolean(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(
                navigator.userAgent
            )
        );

        setIsMobile(isSmall || isMobileDevice);
    }, []);

    return isMobile;
}

export default function Main({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile();
    const gradients = [
        "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
        null,
        "https://products.ls.graphics/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
    ];

    // Define the CircleIcon with consistent styling
    const circleIcon = (
        <CircleIcon className="h-8 w-8 fill-black stroke-black rounded-full" />
    );

    // Adjust gradients based on the device
    const responsiveGradients = isMobile ? gradients.slice(3) : gradients;

    const dockItems = [
        { src: responsiveGradients[1], href: "/", openIcon: circleIcon },
        { src: responsiveGradients[2], href: "/dashboard", openIcon: circleIcon },
        { src: responsiveGradients[0], href: "/profile", openIcon: circleIcon },
        { src: responsiveGradients[5], href: "/settings", openIcon: circleIcon },
        // Add more items as needed
    ];

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <main>
                {children}
            </main>
            <Dock className="flex-1">
                {dockItems.map((item, index) =>
                    item.src ? (
                        <DockCard key={index} id={`${index}`} href={item.href}>
                            <DockCardInner src={item.src} id={`${index}`}>
                                {item.openIcon}
                            </DockCardInner>
                        </DockCard>
                    ) : (
                        <DockDivider key={index} />
                    )
                )}
                <ThemeToggle />
            </Dock>
        </ThemeProvider>
    );
}

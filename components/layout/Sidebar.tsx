"use client"



import { HelpCircle, Menu, ScrollText, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile hamburger button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu />
            </button>

            {/* Sidebar */}
            <div className={`
        fixed top-0 left-0 h-full w-64 bg-background 
        transform transition-transform duration-300
        md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        border-r z-40
      `}>
                <div className="p-4 space-y-4">
                    <Button variant="ghost"
                        className="w-full justify-start"
                        asChild
                    >
                        <a href="/dashboard">
                            <ScrollText className="mr-2 h-4 w-4" />
                            Documents
                        </a>
                    </Button>

                    <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                    >
                        <a href="/settings">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </a>
                    </Button>

                    <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                    >
                        <a href="/help">
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Help
                        </a>
                    </Button>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
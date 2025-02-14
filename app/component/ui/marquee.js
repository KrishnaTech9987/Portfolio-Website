'use client';
import { useEffect, useRef } from 'react';
import { Star } from '../../../public/assets/icons';
import { MarketingServices } from '../../data/sharedData';


const Marquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        let scrollAmount = 0;

        const animate = () => {
            if (marquee) {
                scrollAmount -= 1;
                marquee.style.transform = `translateX(${scrollAmount}px)`;
                if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <div className="relative overflow-hidden whitespace-nowrap w-full bg-gray-800 text-black py-2 sm:py-3 md:py-4">
            <div className="absolute top-0 left-0 h-full w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
            <div className="flex flex-center-between-row items-center space-x-4 xs:space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12" ref={marqueeRef}>
                {[...Array(2)].flatMap(() => MarketingServices).map((service, index) => (
                    <div key={index} className="flex items-center space-x-4 xs:space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12">
                        <span className="text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm font-medium dark:text-white dark:text-white/40">
                            {service.name}
                        </span>
                        <Star className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 sm:w-1/4 bg-gradient-to-r from-background z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 sm:w-1/4 bg-gradient-to-l from-background z-10"></div>
        </div>
    );
};

export default Marquee;

import React, { useEffect } from 'react'
import KUTE from 'kute.js';
function BottomSeparator() {
    // useEffect(() => {
    //     const animation1 = KUTE.fromTo(
    //         '#blue-1-1-2',
    //         { path: '#blue-1-1-2' },
    //         { path: '#blue-1-2-2' },
    //         { repeat: 999, duration: 3000, yoyo: true }
    //     );
    //     animation1.start();
    //     const animation2 = KUTE.fromTo(
    //         '#blue-2-1-2',
    //         { path: '#blue-2-1-2' },
    //         { path: '#blue-2-2-2' },
    //         { repeat: 999, duration: 3000, yoyo: true }
    //     );
    //     animation2.start();

    //     const animation3 = KUTE.fromTo(
    //         '#blue-3-1-2',
    //         { path: '#blue-3-1-2' },
    //         { path: '#blue-3-2-2' },
    //         { repeat: 999, duration: 3000, yoyo: true }
    //     );
    //     animation3.start();

    //     const animation4 = KUTE.fromTo(
    //         '#blue-4-1-2',
    //         { path: '#blue-4-1-2' },
    //         { path: '#blue-4-2-2' },
    //         { repeat: 999, duration: 3000, yoyo: true }
    //     );
    //     animation4.start();

    //     const animation5 = KUTE.fromTo(
    //         '#blue-5-1-2',
    //         { path: '#blue-5-1-2' },
    //         { path: '#blue-5-2-2' },
    //         { repeat: 999, duration: 3000, yoyo: true }
    //     );
    //     animation5.start();
    // }, []);
    return (
        <>
        <svg id="separator-2" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
            <g opacity={1}> 
                <path id='blue-1-1-2'
                    d="M0 79L21.5 81.3C43 83.7 86 88.3 128.8 89C171.7 89.7 214.3 86.3 257.2 83.8C300 81.3 343 79.7 385.8 81.7C428.7 83.7 471.3 89.3 514.2 92.8C557 96.3 600 97.7 642.8 97.2C685.7 96.7 728.3 94.3 771.2 92.7C814 91 857 90 878.5 89.5L900 89L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#001146"></path>
                <path id='blue-2-1-2'
                    d="M0 80L21.5 74.7C43 69.3 86 58.7 128.8 57.5C171.7 56.3 214.3 64.7 257.2 66.8C300 69 343 65 385.8 61.7C428.7 58.3 471.3 55.7 514.2 56.7C557 57.7 600 62.3 642.8 62.3C685.7 62.3 728.3 57.7 771.2 59.2C814 60.7 857 68.3 878.5 72.2L900 76L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#002b63"></path>
                <path id='blue-3-1-2'
                    d="M0 59L21.5 58.8C43 58.7 86 58.3 128.8 57.3C171.7 56.3 214.3 54.7 257.2 55C300 55.3 343 57.7 385.8 55.8C428.7 54 471.3 48 514.2 44.8C557 41.7 600 41.3 642.8 43.5C685.7 45.7 728.3 50.3 771.2 53.5C814 56.7 857 58.3 878.5 59.2L900 60L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#004680"></path>
                <path id='blue-4-1-2'
                    d="M0 34L21.5 35.7C43 37.3 86 40.7 128.8 41.3C171.7 42 214.3 40 257.2 40.2C300 40.3 343 42.7 385.8 42.3C428.7 42 471.3 39 514.2 36.5C557 34 600 32 642.8 30.3C685.7 28.7 728.3 27.3 771.2 27.3C814 27.3 857 28.7 878.5 29.3L900 30L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#04639c"></path>
                <path id='blue-5-1-2'
                    d="M0 25L21.5 25.2C43 25.3 86 25.7 128.8 25.5C171.7 25.3 214.3 24.7 257.2 23.7C300 22.7 343 21.3 385.8 20C428.7 18.7 471.3 17.3 514.2 16.8C557 16.3 600 16.7 642.8 16.2C685.7 15.7 728.3 14.3 771.2 14.3C814 14.3 857 15.7 878.5 16.3L900 17L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#1881b6"></path>
            </g>
            <g opacity={0}>
                <path id='blue-1-2-2'
                    d="M0 82L21.5 84C43 86 86 90 128.8 87.5C171.7 85 214.3 76 257.2 75.8C300 75.7 343 84.3 385.8 86.7C428.7 89 471.3 85 514.2 81.7C557 78.3 600 75.7 642.8 72.8C685.7 70 728.3 67 771.2 69.7C814 72.3 857 80.7 878.5 84.8L900 89L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#001146"></path>
                <path id='blue-2-2-2'
                    d="M0 49L21.5 51.8C43 54.7 86 60.3 128.8 63C171.7 65.7 214.3 65.3 257.2 67C300 68.7 343 72.3 385.8 74C428.7 75.7 471.3 75.3 514.2 75.5C557 75.7 600 76.3 642.8 72.8C685.7 69.3 728.3 61.7 771.2 59.8C814 58 857 62 878.5 64L900 66L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#002b63"></path>
                <path id='blue-3-2-2'
                    d="M0 40L21.5 40.3C43 40.7 86 41.3 128.8 42.5C171.7 43.7 214.3 45.3 257.2 48.7C300 52 343 57 385.8 58.5C428.7 60 471.3 58 514.2 55.5C557 53 600 50 642.8 47.5C685.7 45 728.3 43 771.2 41.2C814 39.3 857 37.7 878.5 36.8L900 36L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#004680"></path>
                <path id='blue-4-2-2'
                    d="M0 27L21.5 28.5C43 30 86 33 128.8 34C171.7 35 214.3 34 257.2 33.7C300 33.3 343 33.7 385.8 34C428.7 34.3 471.3 34.7 514.2 35.7C557 36.7 600 38.3 642.8 37.8C685.7 37.3 728.3 34.7 771.2 32.3C814 30 857 28 878.5 27L900 26L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#04639c"></path>
                <path id='blue-5-2-2'
                    d="M0 10L21.5 10.2C43 10.3 86 10.7 128.8 12C171.7 13.3 214.3 15.7 257.2 15.5C300 15.3 343 12.7 385.8 13.8C428.7 15 471.3 20 514.2 21.5C557 23 600 21 642.8 19.5C685.7 18 728.3 17 771.2 18C814 19 857 22 878.5 23.5L900 25L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
                    fill="#1881b6"></path>
            </g> 
        </svg>
        <div className='h-[300px] w-full'/>
        </>
    )
};

export default BottomSeparator;
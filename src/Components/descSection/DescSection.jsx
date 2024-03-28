import React from "react";


import "./descsection.css";

export default function DescSection() {
    const description = [
        { id: 1, title: "Entrega Segura", desc: "Slate helps you see how many more days you need to work to reach your financial goal" },
        { id: 2, title: "Variedade Imensa", desc: "Slate helps you see how many more days you need to work to reach your financial goal" },
        { id: 3, title: "Você no ", desc: "Slate helps you see how many more days you need to work to reach your financial goal" },
    ]

    const leftDescription = description.slice(0, 1);
    const centerDescription = description.slice(1, 2);
    const rightDescription = description.slice(2, 3);

    return (
        <>
            <div className="container-desc">
                <h1 className="title-desc">O que nos torna <span className="span-desc">especiais?</span></h1>
                <div className="content-desc">
                    <section className="section-desc">
                        <div className="left-desc">
                            {leftDescription.map(desc => (
                                <div key={desc.id}>
                                    <div className="desc-icon">
                                        <svg width="120" height="117" viewBox="0 0 120 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_161_308)">
                                                <path d="M78.8023 81.1476H5.91724L16.9604 19.3058H89.8455L78.8023 81.1476Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M105.306 81.1476H78.8022L85.4282 43.6008H97.5757C99.766 43.5888 101.928 44.0964 103.884 45.0822C105.84 46.0679 107.534 47.5036 108.828 49.2713C110.121 51.039 110.977 53.0882 111.324 55.2508C111.672 57.4134 111.502 59.6277 110.827 61.7117L105.306 81.1476Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M26.7005 100.694C29.6402 100.694 32.0233 98.311 32.0233 95.3713C32.0233 92.4316 29.6402 90.0485 26.7005 90.0485C23.7608 90.0485 21.3777 92.4316 21.3777 95.3713C21.3777 98.311 23.7608 100.694 26.7005 100.694Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M72.3973 100.694C75.337 100.694 77.7201 98.311 77.7201 95.3713C77.7201 92.4316 75.337 90.0485 72.3973 90.0485C69.4576 90.0485 67.0745 92.4316 67.0745 95.3713C67.0745 98.311 69.4576 100.694 72.3973 100.694Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M1.5 43.6008H34.6296" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_161_308">
                                                    <rect width="120" height="120" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                    <h2>{desc.title}</h2>
                                    <p>{desc.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="section-desc">
                        <div className="center-desc">
                            {centerDescription.map(desc => (
                                <div key={desc.id}>
                                    <div className="desc-icon">
                                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M82.5 57.5V72.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M42.5 57.5V72.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M57.5 22.5V37.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M32.5 24.3C32.5 23.3059 33.3059 22.5 34.3 22.5H80.7C81.6941 22.5 82.5 23.3059 82.5 24.3V57.5H34.3C33.3059 57.5 32.5 56.6941 32.5 55.7V24.3Z" stroke="black" stroke-width="3" />
                                            <path d="M22.5 59.3C22.5 58.3059 23.3059 57.5 24.3 57.5H62.5V97.5H24.3C23.3059 97.5 22.5 96.6941 22.5 95.7V59.3Z" stroke="black" stroke-width="3" />
                                            <path d="M62.5 57.5H100.7C101.694 57.5 102.5 58.3059 102.5 59.3V95.7C102.5 96.6941 101.694 97.5 100.7 97.5H62.5V57.5Z" stroke="black" stroke-width="3" />
                                        </svg>

                                    </div>
                                    <h2>{desc.title}</h2>
                                    <p>{desc.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="section-desc">
                        <div className="right-desc">
                            {rightDescription.map(desc => (
                                <div key={desc.id}>
                                    <div className="desc-icon">
                                        <svg width="120" height="117" viewBox="0 0 120 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60.5" cy="45" r="8.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M78.1388 40.75C79.266 38.7977 81.1225 37.3731 83.3 36.7896C85.4776 36.2062 87.7977 36.5116 89.75 37.6388C91.7023 38.766 93.1269 40.6225 93.7104 42.8C94.2938 44.9776 93.9884 47.2977 92.8612 49.25C91.734 51.2023 89.8775 52.6269 87.7 53.2104C85.5224 53.7938 83.2023 53.4884 81.25 52.3612C79.2977 51.234 77.8731 49.3775 77.2896 47.2C76.7062 45.0224 77.0116 42.7023 78.1388 40.75L78.1388 40.75Z" stroke="black" stroke-width="3" />
                                            <path d="M28.1388 40.75C29.266 38.7977 31.1225 37.3731 33.3 36.7896C35.4776 36.2062 37.7977 36.5116 39.75 37.6388C41.7023 38.766 43.1269 40.6225 43.7104 42.8C44.2938 44.9776 43.9884 47.2977 42.8612 49.25C41.734 51.2023 39.8775 52.6269 37.7 53.2104C35.5224 53.7938 33.2023 53.4884 31.25 52.3612C29.2977 51.234 27.8731 49.3775 27.2896 47.2C26.7062 45.0224 27.0116 42.7023 28.1388 40.75L28.1388 40.75Z" stroke="black" stroke-width="3" />
                                            <path d="M102.951 81.5105L101.456 81.6268L101.456 81.6268L102.951 81.5105ZM71 65.927L70.128 64.7065L68.5309 65.8475L70.0513 67.0889L71 65.927ZM77.9573 81.5102L79.4538 81.4083L79.4538 81.4083L77.9573 81.5102ZM102 81H77V84H102V81ZM101.456 81.6268C101.442 81.4546 101.51 81.2825 101.625 81.1645C101.735 81.0516 101.874 81 102 81V84C103.348 84 104.563 82.8926 104.447 81.3942L101.456 81.6268ZM83 64C91.1274 64 95.5744 67.4721 98.0939 71.3155C100.676 75.255 101.307 79.7122 101.456 81.6268L104.447 81.3942C104.282 79.2766 103.591 74.2285 100.603 69.6708C97.5521 65.017 92.1803 61 83 61V64ZM71.872 67.1475C74.4487 65.3066 78.0146 64 83 64V61C77.4576 61 73.2666 62.4642 70.128 64.7065L71.872 67.1475ZM70.0513 67.0889C72.6185 69.185 74.1843 72.0946 75.1313 74.898C76.0762 77.6951 76.3704 80.2848 76.4607 81.612L79.4538 81.4083C79.3532 79.9293 79.0292 77.063 77.9735 73.9378C76.9199 70.8189 75.1025 67.3401 71.9487 64.7651L70.0513 67.0889ZM76.4607 81.612C76.4493 81.4437 76.5159 81.2767 76.6284 81.1619C76.7363 81.0518 76.8741 81 77 81V84C78.3504 84 79.555 82.8945 79.4538 81.4083L76.4607 81.612Z" fill="black" />
                                            <path d="M49.9998 65.9269L50.9485 67.0889L52.469 65.8475L50.8718 64.7064L49.9998 65.9269ZM18.0488 81.5105L19.5443 81.6268L19.5443 81.6268L18.0488 81.5105ZM43.0425 81.5102L41.5459 81.4083L41.5459 81.4083L43.0425 81.5102ZM38 64C42.9853 64 46.5511 65.3066 49.1279 67.1475L50.8718 64.7064C47.7333 62.4642 43.5423 61 38 61V64ZM19.5443 81.6268C19.6932 79.7122 20.3235 75.255 22.906 71.3155C25.4255 67.4721 29.8725 64 38 64V61C28.8196 61 23.4478 65.017 20.3971 69.6708C17.4093 74.2285 16.718 79.2765 16.5533 81.3942L19.5443 81.6268ZM19 81C19.1255 81 19.2651 81.0516 19.3751 81.1645C19.4903 81.2825 19.5576 81.4546 19.5443 81.6268L16.5533 81.3942C16.4367 82.8926 17.6517 84 19 84V81ZM43.9998 81H19V84H43.9998V81ZM43.9998 81C44.1257 81 44.2635 81.0518 44.3714 81.1619C44.4839 81.2767 44.5505 81.4437 44.539 81.612L41.5459 81.4083C41.4448 82.8945 42.6494 84 43.9998 84V81ZM44.539 81.612C44.6294 80.2848 44.9236 77.6951 45.8685 74.8979C46.8155 72.0946 48.3813 69.1849 50.9485 67.0889L49.0512 64.765C45.8973 67.34 44.0799 70.8189 43.0263 73.9378C41.9705 77.063 41.6466 79.9293 41.5459 81.4083L44.539 81.612Z" fill="black" />
                                            <path d="M60.5 62.5C75.6441 62.5 77.6828 77.4775 77.9573 81.5102C77.9948 82.0612 77.5523 82.5 77 82.5H44C43.4477 82.5 43.0052 82.0612 43.0427 81.5102C43.3172 77.4775 45.3559 62.5 60.5 62.5Z" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M93 107.5H106.5C107.328 107.5 108 106.828 108 106V92.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M93 12.5H106.5C107.328 12.5 108 13.1716 108 14V27.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M25.8181 107.5H12.3181C11.4897 107.5 10.8181 106.829 10.8181 106V92.5001" stroke="black" stroke-width="3" stroke-linecap="round" />
                                            <path d="M28 12.5H14.5C13.6716 12.5 13 13.1716 13 14V27.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                        </svg>

                                    </div>
                                    <h2>{desc.title}<span className="span-right">Foco</span></h2>
                                    <p>{desc.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
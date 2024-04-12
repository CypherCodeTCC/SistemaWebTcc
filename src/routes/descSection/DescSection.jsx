import React from "react";

import SvgCaminhao from "../../../public/caminhao.svg";
import SvgCaixas from "../../../public/caixas.svg";
import SvgPessoas from "../../../public/pessoas.svg";

import "./descSection.css";

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
                                        <img src={SvgCaminhao} alt="Caminhão de entrega" />
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
                                        <img src={SvgCaixas} alt="Tres caixas" />
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
                                        <img src={SvgPessoas} alt="Tres pessoas" />
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
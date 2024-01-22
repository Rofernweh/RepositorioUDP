import React from 'react';
import '../calculoii.css';
var Latex = require('react-latex');
const Antiderivada = '$$\\int F\'(x)=f(x)$$'
const CalculoIISyllabus = () => {
    return (
        <div className="syllabus">
            {/* Left-side menu */}
            <div className="menu">
                <ul>
                    <li>
                        <a href="#integrales-indefinidas">Integrales Indefinidas</a>
                    </li>
                    <li>
                        <a href="#integral-definida">Integral Definida</a>
                    </li>
                    <li>
                        <a href="#integrales-impropias">Integrales Impropias</a>
                    </li>
                    <li>
                        <a href="#sucesiones-y-series">Sucesiones y Series</a>
                    </li>
                </ul>
            </div>

            {/* Content area */}
            <div className="content">
                <section id="integrales-indefinidas">
                    <h2>Integral Indefinida</h2>
                    <p>
                        La base del cálculo integral es justamente, la <strong>Integral</strong>, que se representa con el símbolo ∫, es una operación matemática que se define como la <strong>Antiderivada</strong>, es decir,
                        <i>la operación inversa a la derivada</i>. Es el juego de encontrar una función f, desde f' (la antiderivada de una función), y se representa de la siguiente manera:
                    </p>
                    <Latex displayMode={true}>{Antiderivada}</Latex>
                    <span>Donde: </span> <Latex>$∫$ es el símbolo de integración, </Latex><Latex>$F'(x)$ la función derivada, y</Latex> <Latex>$f(x)$ la función original.</Latex>

                    <h3>Integración por sustitución simple</h3>
                    <p>
                        La integración por sustitución simple es un método de integración que se utiliza para integrar funciones compuestas. Es decir, funciones que están compuestas por una función exterior y una función interior.
                    </p>
                </section>

                <section id="integral-definida">
                    <h2>Integral Definida</h2>
                    <p>

                    </p>
                </section>

                <section id="integrales-impropias">
                    <h2>Integrales Impropias</h2>
                    <p>
                        Improper integrals are definite integrals that have infinite limits or integrands
                        with infinite discontinuities. This section defines improper integrals of the
                        first and second kind, discusses convergence and divergence, and introduces
                        p-integrals.
                    </p>
                </section>

                <section id="sucesiones-y-series">
                    <h2>Sucesiones y Series</h2>
                    <p>
                        Sequences and series are fundamental concepts in calculus. This section covers
                        the definition of partial sums, series convergence criteria (comparison, ratio,
                        root), and explores specific types of series such as geometric and telescopic
                        series.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CalculoIISyllabus;

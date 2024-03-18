import React, { FC } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled, { createGlobalStyle } from 'styled-components';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { usePrismTheme, useColorMode } from '@docusaurus/theme-common';
import { PlaygroundPreview } from '@salutejs/plasma-docs-ui';
import { {{ theme }}__dark, {{ theme }}__light } from '@salutejs/{{ vertical }}-themes';
import { standard } from '@salutejs/plasma-typo';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';

import { CodeSandbox } from '../../components';

import styles from './styles.module.css';

// Именно в этом файле подключаются/управляются темы/токены
const LightTheme = createGlobalStyle({{ theme }}__light);
const DarkTheme = createGlobalStyle({{ theme }}__dark);

const StyledWrap = styled.div`
    width: fit-content;
    position: absolute;
    right: 8px;
    top: 8px;
`;

const StyledPlayground = styled.div`
    position: relative;
`;

const StandardTypo = createGlobalStyle(standard);

/**
 * Вырезаем блок с `import` чтобы полученный source вставить в блок "LIVE EDITOR".
 * @example
 * import React from 'react';
 * import { Button } from '@salutejs/sdds-serv';
 * import { IconDownload } from '@salutejs/plasma-icons';
 * // этот строки с import будет заменены на пустую строку
 * // будет взять только блок с function App
 *
 * function App() {
 *     return (
 *         <div>
 *             <Button text="Текст" />
 *
 *             <Button text="Текст" contentLeft={<IconDownload />} />
 *         </div>
 *     );
 * }
 */
const getSourceWithoutImports = (source: string) => {
    const regexp = /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;
    
    return source
        .replace(regexp, '')
        .replace(/export/g, '')
        .trimStart();
};

const Header: FC = ({ children }) => {
    return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
};

const ResultWithHeader: FC = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            {colorMode === 'dark' ? <DarkTheme /> : <LightTheme />}
            <StandardTypo />
            <Header>
                <Translate id="theme.Playground.result" description="The result label of the live codeblocks">
                    Result
                </Translate>
            </Header>
            <LivePreview theme={colorMode} />
            <LiveError />
        </>
    );
};

const EditorWithHeader: FC = () => {
    return (
        <>
            <Header>
                <Translate id="theme.Playground.liveEditor" description="The live editor label of the live codeblocks">
                    Live Editor
                </Translate>
            </Header>
            <LiveEditor className={styles.playgroundEditor} />
        </>
    );
};

type PlaygroundProps = {
    transformCode: (code: string) => string;
    children: string;
} & { [key: string]: boolean | string | number };

const Playground: FC<PlaygroundProps> = ({ children, transformCode, ...props }) => {
    const isBrowser = useIsBrowser();
    const {
        siteConfig: {
            themeConfig: {
                liveCodeBlock: { playgroundPosition },
            },
        },
    } = useDocusaurusContext();
    const prismTheme = usePrismTheme();

    return (
        <div className={styles.playgroundContainer}>
            <LiveProvider
                key={isBrowser}
                code={isBrowser ? getSourceWithoutImports(children).replace(/\n$/, '') : ''}
                transformCode={transformCode || ((code) => `${code};`)}
                theme={prismTheme}
                {...props}
            >
                <StyledPlayground>
                    {playgroundPosition === 'top' ? (
                        <>
                            {!props['no-execute'] && <ResultWithHeader />}
                            <EditorWithHeader />
                        </>
                    ) : (
                        <>
                            <EditorWithHeader />
                            {!props['no-execute'] && <ResultWithHeader />}
                        </>
                    )}
                    <StyledWrap>
                        <CodeSandbox source={children} />
                    </StyledWrap>
                </StyledPlayground>
            </LiveProvider>
        </div>
    );
};

export default Playground;
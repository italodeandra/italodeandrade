import React, { FunctionComponent } from 'react'
import { classNames } from 'reactjs-library'
import './Text.sass'

interface Props {
    paragraph?: boolean
    subheader?: boolean
    header?: boolean

    code?: boolean
    italic?: boolean
    bold?: boolean
    center?: boolean
    codeblock?: boolean
    ellipsis?: boolean

    select?: 'all' | boolean

    size?: number
    style?: { [key: string]: any }
    className?: string
}

const Text: FunctionComponent<Props> = ({
                                            children,

                                            paragraph,
                                            subheader,
                                            header,

                                            code,
                                            italic,
                                            bold,
                                            select,
                                            center,
                                            codeblock,
                                            ellipsis,

                                            size,
                                            style,
                                            className
                                        }) => {
    select = typeof select !== 'undefined' ? select : true

    let Element
    if (paragraph || header || subheader) {
        Element = NativeDiv
    } else if (code) {
        Element = NativeCode
    } else if (codeblock) {
        children = children && children.toString().trim()
        Element = NativePre
    } else {
        Element = NativeSpan
    }

    return (
        <Element
            className={classNames(
                'Text',
                paragraph && 'paragraph',
                subheader && 'subheader',
                code && 'code',
                italic && 'italic',
                bold && 'bold',
                !select && 'no-select',
                select === 'all' && 'select-all',
                header && 'header',
                center && 'center',
                codeblock && 'codeblock',
                ellipsis && 'ellipsis',
                className
            )}
            style={{ ...style, fontSize: size }}
        >
            {children}
        </Element>
    )
}

const NativeDiv: FunctionComponent<Props> = ({ children, ...props }) => (
    <div {...props}>{children}</div>
)

const NativeSpan: FunctionComponent<Props> = ({ children, ...props }) => (
    <span {...props}>{children}</span>
)

const NativeCode: FunctionComponent<Props> = ({ children, ...props }) => (
    <code {...props}>{children}</code>
)

const NativePre: FunctionComponent<Props> = ({ children, ...props }) => (
    <pre {...props}>{children}</pre>
)

export default Text

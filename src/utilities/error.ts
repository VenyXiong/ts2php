/**
 * @file error utils
 * @author cxtom(cxtom2008@gmail.com)
 */

import ts from 'byots';

export function createDiagnostic(
    node: ts.Node,
    sourceFile: ts.SourceFile,
    messageText: string
) {
    return ts.createDiagnosticForNodeInSourceFile(
        sourceFile, node,
        {
            category: ts.DiagnosticCategory.Warning,
            message: messageText,
            code: 5555,
            key: 'ts2php'
        }
    );
}

export function getUnSupportedMessage(name: string) {
    return `${name} has not supported in ts2php, see https://github.com/searchfe/ts2php`;
}

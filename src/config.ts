import * as vscode from 'vscode';

export const getTetsRoots = (): string[] => {
  return vscode.workspace
    .getConfiguration('jsGoToTest')
    .get('testSourceRoots')!;
};

export const getRoot = (): string => {
  return vscode.workspace.getConfiguration('jsGoToTest').get('sourceRoot')!;
};

export const getTestFileSuffix = (): string => {
  return vscode.workspace.getConfiguration('jsGoToTest').get('testFileSuffix')!;
};

export const getExtensions = (): string[] => {
  return ['ts', 'js', 'tsx', 'jsx', 'mts', 'mjs', 'cts', 'cjs'];
};

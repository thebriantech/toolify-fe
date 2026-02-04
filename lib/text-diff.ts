import * as diff from 'diff';

export interface DiffStats {
    additions: number;
    deletions: number;
}

export const getDiffStats = (oldStr: string, newStr: string): DiffStats => {
    const changes = diff.diffWords(oldStr, newStr);
    return {
        additions: changes.filter(c => c.added).length,
        deletions: changes.filter(c => c.removed).length,
    };
};
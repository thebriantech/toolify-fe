/**
 * Formats a JSON string with proper indentation
 * @param input - The JSON string to format
 * @param indent - Number of spaces for indentation
 * @returns Object containing formatted JSON data or error message
 * @example
 * ```ts
 * formatJson('{"name":"John"}', 2)
 * // Returns: { data: '{\n  "name": "John"\n}', error: null }
 * ```
 */
export const formatJson = (input: string, indent: number) => {
    try {
        if (!input.trim()) return { data: "", error: null }
        const parsed = JSON.parse(input);
        return {
            data: JSON.stringify(parsed, null, indent),
            error: null,
        };
    }
    catch (err: any) {
        return {
            data: "",
            error: err.message || "Invalid JSON input!"
        };
    }
};
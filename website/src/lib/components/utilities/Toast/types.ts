export interface ToastSettings {
    /** Provide the toast message. Supports HTML. */
    message: string;
    /** Provide toast variant. */
    variant?: string;
}

export interface Toast extends ToastSettings {
    /** A UUID will be auto-assigned on `.trigger()`. */
    id: string;
    /** The id of the `setTimeout` if `autohide` is enabled  */
    timeoutId?: ReturnType<typeof setTimeout>;
}

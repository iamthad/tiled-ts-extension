/** Supplemental declarations for the QML JavaScript environment */

/** TODO if needed */
type BodyType = any;
/** TODO if needed */
type Document = any;
/** TODO as needed */
type Event = any;

declare namespace Qt {
    export function atob(data: string): string;
    export function btoa(data: string): string;
}

/** QML's implementation is fairly limited */
interface XMLHttpRequest {
    open(method: string, url: string): void;
    open(method: string, url: string, async: boolean, username?: string | null, password?: string | null): void;
    setRequestHeader(name: string, value: string): void;
    send(body?: BodyType | null): void;
    abort(): void;
    getResponseHeader(name: string): string | null;
    getAllResponseHeaders(): string;

    readonly readyState: number;
    readonly status: number;
    readonly statusText: string;
    readonly responseText: string;
    readonly responseXML: any | null;
    readonly response: any;

    responseType: ("" | "arraybuffer" | "blob" | "document" | "json" | "text");

    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: Event) => any) | null;
    onload: ((this: XMLHttpRequest, ev: Event) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: Event) => any) | null;


    readonly UNSENT: number;
    readonly OPENED: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly DONE: number;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;

    readonly UNSENT: number;
    readonly OPENED: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly DONE: number;
};



declare function date(x: string, t?: number): string;

declare function strftime(a: string, b: number | string): string;

declare function strtotime(a: string): number;

declare function isset(x: any): boolean;

declare function empty(x: any): boolean;

declare function intval(x: any): number;

declare function floatval(x: any): number;

declare function hexdec(str: string): number;

declare function iconv(sourceCode: string, targetCode: string, content: string): string;

declare function version_compare(a: string, b: string): -1 | 0 | 1;

declare function md5(a: string): string;

declare function urldecode(str: string): string;

declare function urlencode(str: string): string;

type UrlInfo = {
    scheme: string
    host: string
    port: string
    user: string
    pass: string
    path: string
    query: string
    fragment: string
};

declare function parse_url(x: string): false | UrlInfo;
declare function parse_url(x: string, component: number): false | string;
declare function parse_str(x: string, array: {[key: string]: any}): void;

declare function http_build_query(
    array: {[key: string]: any},
    prefix?: string,
    separator?: string,
    encType?: number
): string;

declare function is_array(array: any) : boolean;
declare const PHP_URL_SCHEME = 1;
declare const PHP_URL_HOST = 2;
declare const PHP_URL_PORT = 3;
declare const PHP_URL_USER = 4;
declare const PHP_URL_PASS = 5;
declare const PHP_URL_PATH = 6;
declare const PHP_URL_QUERY = 7;
declare const PHP_URL_FRAGMENT = 8;

declare function htmlspecialchars(str: string, flags: number): string;

declare const ENT_COMPAT = 2;
declare const ENT_NOQUOTES = 0;
declare const ENT_QUOTES = 3;

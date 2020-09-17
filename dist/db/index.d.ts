export default function db(options: {
    database: string;
    username: string;
    password: string;
    host: string;
    port: number;
}, timezone?: string): Promise<{
    User: typeof import("./table/user").User;
    Shop: typeof import("./table/shop").Shop;
    ShopDesc: typeof import("./table/shop_desc").ShopDesc;
    WordKo: typeof import("./table/word_ko").WordKO;
    WordKoMean: typeof import("./table/word_ko_mean").WordKOMean;
    WordEn: typeof import("./table/word_en").WordEN;
    WordEnMean: typeof import("./table/word_en_mean").WordENMean;
    CWKo: typeof import("./table/cw_ko").CWKo;
    Session: typeof import("./table/session").Session;
}>;

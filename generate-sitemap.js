const axios = require("axios");
const fs = require("fs");
const path = require("path");
const globby = require("globby");
const prettier = require("prettier");

const MY_DOMAIN = "https://beta.blocksafu.com";
const getDate = new Date().toISOString();

const formatted = (sitemap) =>
    prettier.format(sitemap, { parser: "html" });

// if the public/sitemap directory doesn't exist, create it
const checkDir = async (dir) => {
    if (!fs.existsSync(dir)) {
        await fs.mkdirSync(dir);
    }
};

checkDir("public/sitemap");

const generateSitemap = (sitemap) => {
    return `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        >
        ${sitemap}
        </urlset>
    `;
};

(async () => {
    // Generate pages sitemap
    const pages = await globby([
        // include
        "src/pages/**/**/*.js",
        "src/pages/**/*.js",
        "src/pages/*.js",
        // exclude
        "!pages/_*.js",
        "!pages/**/[page].js",
        "!pages/**/[slug].js",
        "!pages/404.js",
        "!pages/api/**/*.js",
    ]);

    const pagesSitemap = `${pages
        .map((page) => {
            const path = page
                .replace("src/pages/", "")
                .replace(".js", "")
                .replace(/\/index/g, "");
            const routePath = path === "index" ? "" : path;
            return `
                <url>
                <loc>${MY_DOMAIN}/${routePath}</loc>
                <lastmod>${getDate}</lastmod>
                <priority>1</priority>
                <changefreq>weekly</changefreq>
                </url>
            `;
        })
        .join("")}`;

    const generatePagesSitemap = generateSitemap(pagesSitemap);
    const formattedPagesSitemap = formatted(generatePagesSitemap);
    const pagesSitemapURLPath = path.join(
        "public",
        "sitemap",
        "sitemap-pages.xml"
    );

    fs.writeFileSync(pagesSitemapURLPath, formattedPagesSitemap, "utf8");

    // Generate projects sitemap
    const projectsURL = `https://dynamic-audit.blocksafu.com/api/project/getlist`;
    const response = await axios.get(projectsURL);
    const projects = response.data.data;

    const projectSitemap = `${projects
        .map((project) => {
            return `
                <url>
                <loc>${MY_DOMAIN}/project-detail/${project.contract_address}</loc>
                <lastmod>${getDate}</lastmod>
                <priority>1</priority>
                <changefreq>daily</changefreq>
                </url>
            `;
        })
        .join("")}`;

    const generateProjectSitemap = generateSitemap(projectSitemap);
    const formattedProjectSitemap = formatted(generateProjectSitemap);
    const projectSitemapURLPath = path.join(
        "public",
        "sitemap",
        "sitemap-projects.xml"
    );

    fs.writeFileSync(projectSitemapURLPath, formattedProjectSitemap, "utf8");
})().catch((err) => {
    console.error(err);
});


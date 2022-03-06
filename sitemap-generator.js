import "babel-register";

import router from "./src/sitemap-routes";
import Sitemap from 'react-router-sitemap';

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.vmpics.com.au")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();
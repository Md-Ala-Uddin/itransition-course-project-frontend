/**
 * 
***Main page of the app contains:***
1. gallery of latest templates (name, description or image, author),
2. table of the top 5 most popular templates (with the largest number of filled forms);
3. tag cloud (when the user clicks on the tag, you display the list of templates—in general, you should use “search results page” for it).
 * 
 */

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");
    return (
        <div>
            <h1>{t("title")}</h1>
            <Link href="/templates">{t("templates")}</Link>
        </div>
    );
}

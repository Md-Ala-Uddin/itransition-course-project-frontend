/**
 * @fileoverview This file lists templates
 * @Permissions
 * - Admin -> all
 * - Auth User -> all
 * - Unauth user -> Search and View templates in readonly mode
 * 
 */
export default function Templates() {
    return <div className="">
        <form action="">
            <input type="text" name="search_text" id="" placeholder="Search Template..." />
        </form>
        <div className="">
            Template List
        </div>
    </div>
}
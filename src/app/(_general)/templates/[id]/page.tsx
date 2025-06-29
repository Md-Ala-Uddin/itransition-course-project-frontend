/**
 * @fileoverview This file shows a single template
 * @description A template can have like and comments
 * @description Admin and Author has all the permission
 * - add questions
 * - edit questions
 * - delete questions
 * @description Unauth user can view in read only mode
 * 
***Each template in the table is a link to the template page that contains several tabs:***
1. general settings like title, description, etc. (see below) as well as access settings (all authenticated users for "public" templates or specified user only for "restricted"),
2. editable set of questions,
3. "results", i.e. all filled-out forms based on the given template (with the links to the forms, of course),
4. aggregation of the results/answers (e.g., average value for a numeric field, most often answer for a string field, etc.).

**The template author can click any form in the list on the template page and open the form filled by another user in read-only mode.**
 * 
 * **When the template is opened (by the author or another user that has access), there is a comments list at the bottom. Comments are linear, added only to the end (it’s impossible to insert a new comment between old ones, only add to the end). Comments have to be updated automatically—when the template page is opened and somebody adds a comment to it, it should be added automagically (it’s possible to have a 2-5 second delay).**
 * 
 * **Every template also has "likes" (no more than one from one user per given template).**
 */
export default function Template() {
    return <div className="">

    </div>
}
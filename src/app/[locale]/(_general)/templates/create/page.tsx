/**
 * **Every template can be marked as "public" (can be filled by any authenticated user), or the user selects the set of users registered on the site. The control for the user selection should provide autocompletion for names and for e-mails. Added users can be removed. Provide some sorting of the selected user (user-switchable between name and e-mail).**
 * **Of course, the template allows to specify custom questions ("fields"). There are also fixed fields, that are invisible on the template, but are shown on every form: user (filled automatically) and date (filled automatically).**
 * 
***Also, it's possible to add several questions with the following types:***
1. up to 4 single-line strings,
2. up to 4 multiple-line texts,
3. up to 4 non-negative integers,
4. up to 4 checkboxes.

**Each question has a title, description, and a boolean value that defines whether the question will be displayed in the table of the filled-out forms (on the tab of the template).**

**It's possible to reorder questions with drag'n'drop.**


For example, I want to create a questionnaire for job candidates. I add the following questions:
Single-line question "Position" ("What position do you apply for?"),
Integer-value question "Experience" ("Work on the commercial projects or freelance (in years)"),
Single-line question "Contact" ("Phone number or Skype"),
Text question "Additional information"/("Write anything in the field below").
 * 
 */
export default function CreateTemplate() {
    return <div className="">Create Template</div>;
}

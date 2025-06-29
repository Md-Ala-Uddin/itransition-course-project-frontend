/**
 * @fileoverview This component creates a comment
 * @description Only authenticated user can post comment
 * 
 */
export default function CreateComment() {
    return (
        <div className="">
            <form action="">
                <textarea
                    name="comment"
                    id=""
                    placeholder="Write Comment..."
                    rows={5}
                    cols={10}
                />
            </form>
        </div>
    );
}
